const express = require("express")
const WorkoutsModel = require("../models/WorkoutsModel")
const {createworkout, getWorkouts, getWorkout, deleteWorkout, updateWorkout} = require("../controllers/workoutController")

const router = express()

router.get('/' , getWorkouts)

router.get('/:id' , getWorkout)

router.post('/' ,createworkout )

router.delete('/:id' , deleteWorkout)

router.patch('/:id' , updateWorkout)

module.exports = router;