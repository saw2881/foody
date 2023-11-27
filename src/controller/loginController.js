const UserService = require("./../service/userService");
const bCrypt = require("bcrypt");

function configure(app) {

    const userService = new UserService();
    //GET
    app.get("/login",(req, res)=> {
        res.render('login');
    });

    //POST
    app.post("/login", async (req, res) => {
        const requestBody = req.body;
        const isValidLogin = await userService.login(requestBody.email, requestBody.password);

        if(!isValidLogin)
            res.render("login");
        else 
            res.render("weight_mantain")
    });

}

module.exports = configure;