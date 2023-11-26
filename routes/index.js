const app = require('express')();
const http = require('http').Server(app);


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://sahasantanu38:sGFxjYFLY26lPJq8@foody-db.ryrramb.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("Connected to MongoDB Atlas database!");

    const db = client.db('test');

    // Perform database operations here

    client.close();
});