const { model, default: mongoose } = require("mongoose")
const WorkoutsModel = require("../models/WorkoutsModel")


const getWorkouts = async (req , res ) => {
    const workouts = await WorkoutsModel.find({}).sort({createdAt : -1})
    res.status(200).json(workouts)
}

const getWorkout = async (req, res) =>{
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error : 'no data found'})
    }
    const workout = await WorkoutsModel.findById(id)
    if(!workout){
        return res.status(404).json({error : "nothing found"})
    }
    res.status(200).json(workout)

}

const createworkout = async(req , res )=>{
    const {title , reps , sets , weight} = req.body
    try{
        const workout  = await WorkoutsModel.create({title , reps , sets , weight})
        res.status(200).json(workout)
    }
    catch(error){
        res.status(400).json({error : error.message})
    }
}

const deleteWorkout = async (req , res) =>{
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error : "invalid delete"})
    }

    const workout  = await WorkoutsModel.findByIdAndDelete({_id: id})

    if(!workout){
        return res.status(400).json({error : "nothing found"})
    }
    res.status(200).json(workout)
}


const updateWorkout = async ( req , res ) =>{
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error : "invalid delete"})
    }

    const workout = await WorkoutsModel.findOneAndUpdate({_id : id}, {
        ...req.body
    })

    res.status(200).json(workout)
}


module.exports = {
    getWorkouts,
    getWorkout,
    createworkout,
    deleteWorkout,
    updateWorkout
}