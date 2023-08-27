const User = require('../model/User');

const handleLogout = async (req, res) => {
    // On client, also delete the accessToken (note to frontend)
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204); // Successful. No Content
    const refreshToken = cookies.jwt;
    // Is refreshToken in db?
    const foundUser = await User.findOne({refreshToken}).exec();
    if (!user) {
        res.clearCookie('jwt', {httpOnly: true, sameSite: 'None', secure: true})
        return res.sendStatus(204); // Successful. No content.
    }
    // Delete the refreshToken in the db
    foundUser.refreshToken = foundUser.refreshToken.filter(rt => rt !== refreshToken);
    const result = foundUser.save();
    console.log(result);
    res.clearCookie('jwt', {httpOnly: true, sameSite: 'None', secure: true}) // In production when we create and delete we want to add the flag `secure: true` - Only serves on https
    res.sendStatus(204) // Sucessful. No content.
}

module.exports = { handleLogout }