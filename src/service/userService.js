const User = require("../models/user")
const bCrypt = require("bcrypt");

class UserService {

    constructor() {
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

        if (user) {
           const passwordMatches = await bCrypt.compare(password, user.password);
           if (!passwordMatches)
                throw new Error(`Password does not match for ${email}`);  
        }
        else {
            throw new Error(`User with an email of ${email} does not exist`);
        }
    }

    async getUserDetails(email) {
        const user = await User.findOne({
            email: email
        });

        if (user) {
            return user;
         }
         else {
             throw new Error(`User with an email of ${email} does not exist`);
         }
    }
}

module.exports = UserService;