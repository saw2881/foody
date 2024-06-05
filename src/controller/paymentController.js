function configure(app) {

    app.get("/payment",(req, res)=> {
        res.render('payment');
    });
    
    app.get("/premium",(req, res)=> {
        res.render('premium');
    });
    
    app.get("/subscripion",(req, res)=> {
        res.render('subscripion');
    });

}

module.exports = configure;