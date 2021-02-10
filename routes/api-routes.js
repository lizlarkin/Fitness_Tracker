const router = require('express').Router();

// Import Workout Model
const Workout = require('../models/workout.js');

// Get Workout Stats
router.get('/api/stats', (req, res) => {        
  Workout.find({}, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.json(data);
    }
  });
});

// Post New Workout
router.post('/api/exercise', (req, res) => {
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