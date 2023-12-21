const Users = require('../models/usersModel');


// Create a new users
exports.createUsers = async (req, res) => {
    try {
        const users = await Users.create(req.body);
        res.status(201).json(users);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: error.message });
    }
};

// Get all users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await Users.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get users by Id
exports.getUsersById = async (req, res) => {
    const id = req.params.id;

    try {
        const users = await Users.findById({ _id: id });

        if (!users) {
            return res.status(404).json({ message: 'users not found' });
        }

        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};