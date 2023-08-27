const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const submissionSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    nominatingOptions: {
        type: String,
        required: false
    },
    organizationName: {
        type: String,
        required: false
    },
    individualFullName: {
        type: String,
        required: false
    },
    individualEmailAddress: {
        type: String,
        required: false
    },
    category: {
        type: String,
        required: true
    },
    county: {
        type: String,
        required: true
    },
    story: {
        type: String,
        required: true
    },
    uploadedVideo: {
        type: String,
        required: false
    },
    referenceOne: {
        type: Object
    },
    referenceTwo: {
        type: Object
    },
    disclaimerAgreement: {
        type: Boolean,
        required: true
    },
    score: {
        type: Number,
        required: false
    }
});

module.exports = mongoose.model('Submission', submissionSchema)