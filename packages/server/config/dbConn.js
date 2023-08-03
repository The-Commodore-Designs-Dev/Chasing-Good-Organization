const mongoose = require('mongoose');
const env = require('../env');


const connectDB = async () => {
    try {
        await mongoose.connect(env.DATABASE_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
    } catch (err) {
        console.error(err);
    }
}

module.exports = connectDB