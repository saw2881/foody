function configure(app) {

    app.get("/login",(req, res)=> {
        res.render('login');
    });

}

module.exports = configure;