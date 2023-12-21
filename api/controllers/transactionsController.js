const Transaction = require('../models/TransactionsModel');
 
 
 
// Get all transactions
exports.getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find().populate('book user');
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single transaction
exports.getAllTransactionsById = (req, res) => {
    getTransaction();
  res.json(res.transaction);
};

// Create a transaction (book checkout)
exports.createtransactions = async (req, res) => {
  const transaction = new Transaction({
    book: req.body.book,
    user: req.body.user,
    checkoutDate: req.body.checkoutDate || new Date(),
  });

  try {
    const newTransaction = await transaction.save();
    res.status(201).json(newTransaction);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a transaction (book return)
exports.patch = async (req, res) => {
    getTransaction();
  if (req.body.returnDate != null) {
    res.transaction.returnDate = req.body.returnDate;
  }

  try {
    const updatedTransaction = await res.transaction.save();
    res.json(updatedTransaction);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a transaction
exports.deleteTransactionsById =  async (req, res) => {
    getTransaction();
  try {
    await res.transaction.remove();
    res.json({ message: 'Transaction deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Middleware to get transaction by ID
async function getTransaction(req, res, next) {
  let transaction;
  try {
    transaction = await Transaction.findById(req.params.id);
    if (transaction == null) {
      return res.status(404).json({ message: 'Transaction not found' });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.transaction = transaction;
  next();
}


