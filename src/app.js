const express = require('express');
const path = require('path');
const hbs = require('hbs');
const bodyParser = require('body-parser');

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
    console.log(`Server is running on port ${port}`);
});
