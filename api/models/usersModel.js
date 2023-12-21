const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userame: { type:
     String, 
     required: true
     },
  password: {
     type: String,
      required: true
     },
  role: {
     type: String, 
     enum: ['librarian', 'borrower'], 
     required: true 
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
