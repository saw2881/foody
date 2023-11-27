const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    phone: String,
    birthDate: Date,
    gender: String,
    age: Number,
    height: Number,
    weight: Number,
    password: String
});

const User = mongoose.model('user', userSchema);
module.exports = User;