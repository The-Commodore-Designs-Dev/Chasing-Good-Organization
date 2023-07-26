const express = require('express');
const router = express.Router();
const path = require('path');
const submissionsController = require('../../controllers/submissionsController');
const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');

router.route('/')
    .get(verifyRoles(ROLES_LIST.Voter), submissionsController.getAllSubmissions)


module.exports = router