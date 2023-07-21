const express = require('express');
const router = express.Router();
const path = require('path');
const employeesController = require('../../controllers/employeesController');
const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');

router.route('/')
    .get(verifyRoles(ROLES_LIST.Supervisor), employeesController.getAllEmployees)
    .post(verifyRoles(ROLES_LIST.Supervisor), employeesController.createNewEmployee)
    .put(verifyRoles(ROLES_LIST.Supervisor), employeesController.updateEmployee)
    .delete(verifyRoles(ROLES_LIST.Supervisor), employeesController.deleteEmployee);

router.route('/:id')
    .get(verifyRoles(ROLES_LIST.Supervisor, ROLES_LIST.Supervisor), employeesController.getEmployee);

module.exports = router;