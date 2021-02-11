const router = require('express').Router();

// Import Workout Model
const Workout = require('../models/workout.js');

// Get Workout Range 
router.get('/api/workouts', (req, res) => {        
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: {$sum: '$exercises.duration'}
      }
    }
  ])
    .then(dbWorkout => {
      res.json(dbWorkout);
      console.log(dbWorkout)
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
router.post('/api/workouts/', (req, res) => {
  Workout.create(req.body)
  // Workout.create({})
    .then(dbWorkout => {
      res.json(dbWorkout);
      console.log(dbWorkout)
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// app.post("/api/submit", (req, res) => {
//   console.log(req.body);

//   db.notes.insert(req.body, (error, data) => {
//     if (error) {
//       res.send(error);
//     } else {
//       res.send(data);
//     }
//   });
// });


// Update Workout 
// router.put('/api/exercise/:id', (req, res) => {
//     Workout.findOneAndUpdate(
//         {
//             // filter
//             _id: req.params.id,
//         },
//         {
//             // update
//             $push: {
//                 exercises: req.body.exercises,
//                 // new: true,
//                 // modified: Date.now(),
//               },
//         }
//      )
// });

module.exports = router;

// Add exercises to the most recent workout plan.

// Add new exercises to a new workout plan.

// View the combined weight of multiple exercises from the past seven workouts on the stats page.

// View the total duration of each workout from the past seven workouts on the stats page.