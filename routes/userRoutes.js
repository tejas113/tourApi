const express = require('express');
const fs = require('fs');
const userController = require('./../controllers/userController');

const router = express.Router();



router.route('/').get(userController.getUsers).post(userController.CreateUser);
router.route('/:id').get(userController.getUserById).patch(userController.UpdateUser).delete(userController.deleteUser);

module.exports = router;