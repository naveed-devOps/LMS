const Books = require('../models/booksModel');


// Create a new books
exports.createBook = async (req, res) => {
    try {
        const books = await Books.create(req.body);
        res.status(201).json(books);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: error.message });
    }
};

// Get all books
exports.getAllBooks = async (req, res) => {
    try {
        const books = await Books.find({});
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get books by Id
exports.getBooksById = async (req, res) => {
    const id = req.params.id;

    try {
        const books = await Books.findById({ _id: id });

        if (!books) {
            return res.status(404).json({ message: 'books not found' });
        }

        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};