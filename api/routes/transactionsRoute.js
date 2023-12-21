const express = require('express');
const router = express.Router();
const transactionsController = require('../controllers/transactionsController');

// Routes for transactionsController
router.get('/', transactionsController.getAllTransactions);
router.get('/:id', transactionsController.getAllTransactionsById);
router.post('/', transactionsController.createtransactions);
router.delete('/:id', transactionsController.deleteTransactionsById);
module.exports = router;