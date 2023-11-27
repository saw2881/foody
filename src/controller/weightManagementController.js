function configure(app) {

    app.get("/weight_loss",(req, res)=> {
        res.render('weight_loss');
    });
    
    app.get("/weight_mantain",(req, res)=> {
        res.render('weight_mantain');
    });
    
    app.get("/weight_gain",(req, res)=> {
        res.render('weight_gain');
    });

}

module.exports = configure;