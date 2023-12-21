const express = require('express');
const router = express.Router();
const booksController = require('../controllers/booksController');

// Routes for createBook
  router.get('/', booksController.getAllBooks);
  router.get('/:id', booksController.getBooksById);
  router.post('/', booksController.createBook);

module.exports = router;