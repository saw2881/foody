const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const app = express();
const port = 5000;


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://sahasantanu38:sGFxjYFLY26lPJq8@foody-db.ryrramb.mongodb.net/?retryWrites=true&w=majority";


// Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/admin/santau', { useNewUrlParser: true, useUnifiedTopology: true });

// Create a Mongoose Schema
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

// Create a Mongoose Model
const User = mongoose.model('User', userSchema);

// Middleware to parse JSON data
app.use(bodyParser.json());

// POST endpoint for user registration
app.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Hash the password before storing it in the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user instance with the hashed password
    const newUser = new User({ email, password: hashedPassword });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// POST endpoint for user login
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user in the database by email
    const user = await User.findOne({ email });

    // If the user is not found, return an error
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, user.password);

    // If passwords match, login is successful
    if (passwordMatch) {
      res.json({ message: 'Login successful' });
    } else {
      res.status(401).json({ error: 'Invalid email or password' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

console.log()

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector("form");

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const emailInput = document.getElementById('emailInput');
    const passwordInput = document.getElementById('passwordInput');

    // Fetch API or XMLHttpRequest to send data to the server
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: emailInput.value,
          password: passwordInput.value,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Successful login, you can redirect or perform other actions
        console.log(data.message);
      } else {
        // Handle login error
        console.error(data.error);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  });
});

