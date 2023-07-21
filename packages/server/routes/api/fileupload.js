const express = require('express');
const router = express.Router();
const fileUpload = require('express-fileupload');
const path = require('path');
const fileuploadController = require('../../controllers/fileuploadController');
const filePayloadExists = require('../../middleware/filesPayloadExists');
const fileExtLimiter = require('../../middleware/fileExtLimiter');
const fileSizeLimiter = require('../../middleware/fileSizeLimiter');

router.route('/')
    .post(fileuploadController.postFile)

module.exports = router