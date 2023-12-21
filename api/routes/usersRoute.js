const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

// Routes for userController
router.get('/', usersController.getAllUsers);
router.get('/:id', usersController.getUsersById);
router.post('/', usersController.createUsers);

module.exports = router;

