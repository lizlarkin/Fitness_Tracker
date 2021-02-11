const router = require('express').Router();

// Import Workout Model
const Workout = require('../models/workout.js');

// Get Last Workout Stats 
router.get('/api/workouts', (req, res) => {        
  Workout.find({})
    // sort ascending to get most recent workout
    .sort({ day: 1 })  
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


router.get("/api/transaction", (req, res) => {
  Transaction.find({})
    .sort({ date: -1 })
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// Post New Workout
router.post('/api/workouts', (req, res) => {
    Workout.insertOne(req.body)
      .then(dbWorkout => {               
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });


// Update Workout 
// router.put('/api/exercise/:id', (req, res) => {
//     workout.findOneAndUpdate(
//         {
//             // filter
//             _id: req.params.id,
//         },
//         {
//             // update
//             $push: {
//                 exercises: req.body.exercises,
//                 new: true,
//                 modified: Date.now(),
//               },
//         }
//      )
// });

module.exports = router;

// Add exercises to the most recent workout plan.

// Add new exercises to a new workout plan.

// View the combined weight of multiple exercises from the past seven workouts on the stats page.

// View the total duration of each workout from the past seven workouts on the stats page.