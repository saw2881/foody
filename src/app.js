
// Importing required modules
const express = require('express');
const path = require('path');
const hbs = require('hbs');
const { MongoClient } = require("mongodb");

// Initializing Express app
const app = express();

// Setting up the port number
const port = process.env.PORT || 5000;


const uri = "mongodb://127.0.0.1:27017/Foody";

const client = new MongoClient(uri);
client.connect().then(async client => {
    const database = client.db();
    const collection = await database.createCollection("santanu");
});



// Connecting to MongoDB
// const uri = "mongodb://127.0.0.1:27017/foody";
// const client = new MongoClient(uri);
// client.connect().then(async client => {
//     const database = client.db();
//     const collection = await database.createCollection("MY_data");
// });

// Setting up the public directory and view engine
const static_path = path.join(__dirname, "../public");
const tempate_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.set('view engine', 'hbs');
app.set('views', tempate_path);
hbs.registerPartials(partials_path);

// Setting up static files
app.use(express.static(static_path));

// Setting up routes
app.get("/", (req, res)=>{
    res.render('home')
})

app.get("/login",(req, res)=> {
    res.render('login')
})

app.get("/signin",(req, res)=> {
    res.render('signin')
})

app.get("/weight_loss",(req, res)=> {
    res.render('weight_loss')
})

app.get("/weight_mantain",(req, res)=> {
    res.render('weight_mantain')
})

app.get("/weight_gain",(req, res)=> {
    res.render('weight_gain')
})

app.get("*",(req, res)=> {
    res.render('404error',{
        errorMassage:'Opps ! page is not found .'
    })
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });