const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect(
        "mongodb+srv://Shiv:2YcokNCtYK6ZQnOQ@nodejs.sznamla.mongodb.net/CodeTInder"
    );
};

module.exports = connectDB;
