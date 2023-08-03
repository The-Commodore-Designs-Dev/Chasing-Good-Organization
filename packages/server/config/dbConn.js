const mongoose = require('mongoose');
import env from "../../.env";

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