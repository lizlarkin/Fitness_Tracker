// Dependencies
var path = require('path');

// Routes
module.exports = (router) => {
  // // Route to Home
  // router.get('/index', (req, res) => {
  //   res.sendFile(path.join(__dirname, '../public/index.html'));
  // });

  // Route to Exercise
  router.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
  });

  // Route to Stats
  router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'));
  });

  // Route if not working
  router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

};