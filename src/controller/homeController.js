function configure(app) {

    app.get("/", (req, res)=>{
        res.render('home');
    });

}

module.exports = configure;