const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require("path");

const app = express();
const port = 5000;


const statis_path = path.join(__dirname,"../templates/views/signin.hbs");
app.use(express.static(statis_path));
app.set("view engine","hbs")

// MongoDB schema
const userSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  birthdate: Date,
  gender: String,
  age: Number,
  height: Number,
  weight: Number,
});

const User = mongoose.model('User', userSchema);

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());

// // Route to handle form submissions
// app.post('../templates/views/signin.hbs', async (req, res) => {
//   try {
//     const userData = req.body;

//     // Create a new user in the database
//     const newUser = new User(userData);
//     await newUser.save();

//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// Handle POST request at the '/postData' endpoint
app.post('/postData', (req, res) => {
    const receivedData = req.body.data;
    console.log('Received data:', receivedData);

    // Process the data as needed

    // Send a response back to the client
    res.json({ message: 'Data received successfully' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


// Deprecated options for MongoDB connection
// mongoose.connect('mongodb://localhost:27017/admin', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });