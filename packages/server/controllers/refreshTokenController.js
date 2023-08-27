const User = require('../model/User');
const jwt = require('jsonwebtoken');

const handleRefreshToken = async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(401); // Unauthorized
    const refreshToken = cookies.jwt;
    res.clearCookie('jwt', {httpOnly: true, sameSite: 'None', secure: true});

    // Find the user that is sent in
    const foundUser = await User.findOne({refreshToken}).exec();
    
    // Detected refreshToken reuse
    if (!foundUser) {
        jwt.verify(
            refreshToken,
            process.env.REFRESH_TOKEN_SECRET,
            async (err, decoded) => {
                if (err) return res.sendStatus(403); // Forbidden
                const hackedUser = await User.findOne({username: decoded.username}).exec();
                hackedUser.refreshToken = [];
                const result = hackedUser.save();
            }
        )
        return res.sendStatus(403); // Forbidden
    }

    const newRefreshTokenArray = foundUser.refreshToken.filter(rt => rt !== refreshToken)

    // Evaluate jwt
    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        async (err, decoded) => {
            if (err) {
                foundUser.refreshToken = [...newRefreshTokenArray];
                const result = await foundUser.save();
            }
            if (err || foundUser.username !== decoded.username) return res.sendStatus(403) // Forbidden
            
            // Refresh token was still valid
            const roles = Object.values(foundUser.roles);
            const accessToken = jwt.sign(
                {
                    "UserInfo":
                    {
                        "username": decoded.username,
                        "roles": roles
                    } 
                },
                process.env.ACCESS_TOKEN_SECRET,
                {expiresIn: '30s'} // Should be longer in production app
            );

            const newRefreshToken = jwt.sign(
                {"username": foundUser.username},
                process.env.REFRESH_TOKEN_SECRET,
                {expiresIn: '1d'}
            );
            // Saving Refresh token with current user
            foundUser.refreshToken = [...newRefreshTokenArray, newRefreshToken];
            const result = await foundUser.save();
            
            res.cookie('jwt', newRefreshToken, {httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000});
            
            res.json({accessToken})
        }
    )
}

module.exports = { handleRefreshToken }