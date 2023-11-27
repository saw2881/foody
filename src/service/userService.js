const mongoose = require("mongoose");
const User = require("../models/user")

class UserService {

    constructor() {
        this.dbUrl = "mongodb://127.0.0.1:27017/foody";
        mongoose.connect(this.dbUrl);
    }

    async register(newUser) {
        const userExists = await User.exists({
            email: newUser.email
        });

        if(userExists) {
            throw new Error(`${newUser.email} already exists`)
        }

        await newUser.save();
    }
}

module.exports = UserService;