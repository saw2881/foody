function configure(app) {

    app.get("/", (req, res)=>{
        res.render('home', {
            session: req.session
        });
    });

}

module.exports = configure;