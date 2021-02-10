const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExercisesSchema = new Schema({
  day: {
    type: Date,
    default: ()=>new Date()
  },
  exercises: [
      {
        type: {
            type: String,
            required:  'Exercise type is required'
        },
        name: {
            type: String,
            required: 'Exercise name is required'
        },
        duration: {
            type: Number,
            required: 'Exercise duration is required'
        },
        weight: {
            type: Number,
           
        },
        reps: {
            type: Number,
           
        },
        sets: {
            type: Number,
           
        },
      }
]
});

const Workout = mongoose.model("Workout", ExercisesSchema);

module.exports = Workout;