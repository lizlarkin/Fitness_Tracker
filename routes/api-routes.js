const router = require('express').Router();

// Import Workout Model
const Workout = require('../models/workout.js');
// const db = require('../models/');

// Get Total Duration and Combined Weight of Workouts 
router.get('/api/workouts', (req, res) => {        
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: {$sum: '$exercises.duration'},
        totalWeight: {$sum: '$exercises.weight'}
      }
    }
  ])
    .then(dbWorkout => {
      res.json(dbWorkout);
      // console.log(dbWorkout)
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// Get Last Workout Stats 
router.get('/api/workouts', (req, res) => {        
  Workout.find({})
    // sort ascending to get most recent workout
    .sort({ day: 1 })  
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// Post New Workout (Create Workout)
router.post('/api/workouts', ({body}, res) => {
  Workout.create(body)
  // Workout.create({})
    .then(dbWorkout => {
      res.json(dbWorkout);
      console.log(`from post: ${dbWorkout}`)
    })
    .catch(err => {
      res.status(400).json(err);
      console.log(err)
    });
});

// Update Workout 
router.put('/api/workouts/:id', (req, res) => {
    Workout.findOneAndUpdate(
        {
            // filter
            _id: req.params.id,
        },
            // update
        {$push: { exercises: req.body } }, { new: true })
        .then(dbWorkout => {
          res.json(dbWorkout);
          console.log(`from put: ${dbWorkout}`)
        })
        .catch(err => {
          res.status(400).json(err);
          console.log(err)
        });
});

module.exports = router;