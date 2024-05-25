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
            age: calculateAge(new Date(requestBody.birthDate)),
            gender: requestBody.gender,
            height: parseInt(requestBody.height),
            weight: parseInt(requestBody.weight),
            bmi: calculateBMI(parseInt(requestBody.height), parseInt(requestBody.weight))
        });

        const userService = new UserService();
        try {
            userService.register(user);
            req.session.email = requestBody.email;
            res.redirect('/weight_gain');
        }
        catch(error) {
            res.redirect('/register');
        }
    });
    
}

async function getPasswordHash(password) {
    return await bCrypt.hash(password, saltRounds);
}

function calculateBMI(weightInKg, heightInCm){
    return weightInKg/Math.pow((heightInCm/100), 2);
}

function calculateAge(birthDate) {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();

    // If the current date is before the birthday in the current year, subtract one year from the age
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    return age;
}

module.exports = configure;