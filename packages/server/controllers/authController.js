const User = require('../model/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const handleLogin = async (req, res) => {
    const cookies = req.cookies;
    const { user, pwd } = req.body;
    if (!user || !pwd) {
        return res.status(400).json({'message': 'Username and Password is required'})
    }
    // Find the user that is sent in
    const foundUser = await User.findOne({username: user}).exec();
    if (!user) {
        return res.sendStatus(401); // Unathorized
    }
    // Evaluate password
    const match = await bcrypt.compare(pwd, foundUser.password);
    if (match) {
        const roles = Object.values(foundUser.roles);
        // Create a JWT (multiple) to use with other routes to be protected in API
        const accessToken = jwt.sign(
            { 
                "UserInfo": {
                    "username": foundUser.username,
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

        let newRefreshTokenArray =
            !cookies?.jwt
                ? foundUser.refreshToken
                : foundUser.refreshToken.filter(rt => rt !== cookies.jwt);

        if (cookies?.jwt) {
            /*
            Scenario added here:
                1) User logs in but never uses RT and does not logout
                2) RT is stolen
                3) If 1 & 2, reuse detection is needed to clear all RTs when user logs in
            */
           const refreshToken = cookies.jwt;
           const foundToken = await User.findOne({refreshToken}).exec();

           // Detected refresh token reuse
           if (!foundToken) {
                // Clear out ALL previous refresh tokens
                newRefreshTokenArray = [];
           }
           
            res.clearCookie('jwt', {httpOnly: true, sameSite: 'None', secure: true});
        }

        // Saving Refresh token with current user
        foundUser.refreshToken = [...newRefreshTokenArray, newRefreshToken];
        const result = await foundUser.save();
        console.log(result);
        res.cookie('jwt', newRefreshToken, {httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000});
        res.json({accessToken});
    } else {
        res.sendStatus(401);
    }
}

module.exports = { handleLogin };