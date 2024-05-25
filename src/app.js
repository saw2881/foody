const express = require('express');
const path = require('path');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const session = require('express-session');

// Initializing Express app
const app = express();

// Setting up the port number
const port = process.env.PORT || 5000;

// Setting up the public directory and view engine
const static_path = path.join(__dirname, "../public");
const tempate_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.set('view engine', 'hbs');
app.set('views', tempate_path);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(static_path));

// Configure Sessions
app.use(session({
    secret: 'your_secret_key', // Change this to a secure random string
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set to true if using HTTPS
  }));

hbs.registerPartials(partials_path);

require('./controller/registrationController')(app);
require('./controller/weightManagementController')(app);
require('./controller/homeController')(app);
require('./controller/loginController')(app);

app.get("*",(req, res)=> {
    res.render('404error',{
        errorMassage:'Opps ! page is not found .'
    });
});

app.listen(port, () => {

    this.dbUrl = "mongodb://localhost:27017/foody";
    mongoose.connect(this.dbUrl,  {
            authSource: "admin",
            user: "admin",
            pass: "admin",
            useNewUrlParser: true,
            useUnifiedTopology: true,
          })
        .then(() => {
            console.log('Database connection successful');
          })
          .catch((err) => {
            console.error('Database connection error:', err);
    });
    console.log(`Server is running on port ${port}`);
});

module.exports = mongoose;