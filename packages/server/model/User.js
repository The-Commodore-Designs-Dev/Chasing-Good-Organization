import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    roles: {
        User: {
            type: Number,
            default: 2001
        },
        Editor: Number,
        Voter: Number,
        Admin: Number
    },
    password: {
        type: String,
        required: true
    },
    refreshToken: [String]
})

module.exports = mongoose.model('User', userSchema)