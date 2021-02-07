// NPM Libraries
const express = require("express");
const mongojs = require("mongojs");
const mongoose = require("mongoose");
const morgan = require('morgan');

//Establish Port
const PORT = process.env.PORT || 3030;

// Set up Express
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Set up Mongo
const databaseUrl = 'fitness';
const collections = ['workouts'];
const db = mongojs(databaseUrl, collections);

db.on("error", error => {
    console.log("Database Error:", error);
  });

// Routes


// Start Server
app.listen(3030, () => {
    console.log(`Fitness Tracker Link: http://localhost:${PORT}`);
  });