const session = require('express-session');
const UserService = require("../service/userService");

function configure(app) {

    app.get("/weight_loss",(req, res)=> {
        res.render('weight_loss');
    });
    
    app.get("/weight_mantain",(req, res)=> {
        res.render('weight_mantain');
    });
    
    app.get("/weight_gain",async (req, res)=> {
        const userService = new UserService();
        if(!req.session.email)
            res.redirect('/login');
        const userDetail = await userService.getUserDetails(req.session.email);
        res.render('weight_gain', userDetail);
    });

}

module.exports = configure;