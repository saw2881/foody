const userService = require("./../service/userService");
const User = require("./../models/user");
const UserService = require("./../service/userService");
const bCrypt = require("bcrypt");

const saltRounds = 10;

function configure(app) {
    
    //GET
    app.get("/register", (req, res) => {
        res.render('register');
    });
    
    //POST
    app.post("/register", async (req, res) => {
        const requestBody = req.body;
        
        const user = new User({
            fullName: requestBody.fullName,
            email: requestBody.email,
            password: await getPasswordHash(requestBody.password),
            phone: requestBody.phone,
            birthDate: new Date(requestBody.birthDate),
            age: parseInt(requestBody.age),
            gender: requestBody.gender,
            height: parseInt(requestBody.height),
            weight: parseInt(requestBody.weight)
        });

        const userService = new UserService();
        userService.register(user);
    });
    
}

async function getPasswordHash(password) {
    return await bCrypt.hash(password, saltRounds);
}

module.exports = configure;