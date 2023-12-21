require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
 
const app = express();

const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 65;

app.use(express.json());

 



// Routes
const booksRoutes = require('./api/routes/booksRoute');
const usersRoutes = require('./api/routes/usersRoute');
const transactionsRoutes = require('./api/routes/transactionsRoute');


app.use('/api/books', booksRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/transactions', transactionsRoutes);



// MongoDB connection
mongoose
    .connect(MONGO_URL)
    .then(() => {
        console.log('Connected to MongoDB');

        // Server is running after MongoDB connection
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error(error);
    });
