const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  book: { 
    type: mongoose.Schema.Types.ObjectId,
     ref: 'Book', 
     required: true 
    },
  user: {
     type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
       required: true 
    },
  checkoutDate: { 
    type: Date, 
    default: Date.now
 },
  returnDate: { 
    type: Date
 },
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
