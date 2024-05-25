const UserService = require("../service/userService");
const session = require('express-session');

function configure(app) {

    app.get("/login",(req, res)=> {
        res.render('login', { session: req.session });
    });

    app.post("/login",async (req, res)=> {
        const requestBody = req.body;
        const userService = new UserService();
        try {
            userService.login(requestBody.email, requestBody.password);
            req.session.email = requestBody.email;
        }
        catch (error) {
            res.send({
                status: "Error",
                reason: error.message
            });
        }
        res.redirect('/weight_gain');
    });

}

module.exports = configure;