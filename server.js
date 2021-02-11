// NPM Libraries
const express = require("express");
// const mongojs = require("mongojs");
const mongoose = require('mongoose');
// const morgan = require('morgan');

//Establish Port
const PORT = process.env.PORT || 3030;

// Set up Express
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Morgan
// app.use(logger('dev'));

// Mongoose Connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).then(() => console.log('connected'));



// Set up Mongo
// const databaseUrl = 'workout';
// const collections = ['workouts'];
// const db = mongojs(databaseUrl, collections);

// db.on("error", error => {
//     console.log("Database Error:", error);
//   });

// Connect Server and Routes
app.use(require("./routes/api-routes.js"));
app.use(require("./routes/html-routes.js"));
// const routes = require('./routes')
// app.use(routes);

// Start Server
app.listen(3030, () => {
    console.log(`Fitness Tracker Link: http://localhost:${PORT}`);
  });