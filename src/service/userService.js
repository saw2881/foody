const mongoose = require("mongoose");
const User = require("../models/user")
const bCrypt = require("bcrypt");

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
    
    async login(email, password) {

        const user = await User.findOne({
            email: email
        });

        if(!user) {
            throw new Error(`${newUser.email} does not exist`)
        }

       return await bCrypt.compare(password, user.password);
    }

}

module.exports = UserService;