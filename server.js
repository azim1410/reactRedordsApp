require("dotenv").config()
const express = require("express")
const workoutRoute = require("./routes/workout")
const mongoose = require("mongoose")
const app = express()

app.use(express.json())

app.use((req, res, next) =>{
    console.log(req.path , req.method)
    next()
})

app.use('/api/workout' , workoutRoute)

mongoose.connect("mongodb+srv://azimadamani:azimadamani.01@cluster0.3dlb3tk.mongodb.net/?retryWrites=true&w=majority")
    .then( () => {
        app.listen(process.env.PORT, ()=>{
            console.log("on port ", process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })

