const express=require('express')
const app=express()
const mongoose=require('mongoose')
const cors=require('cors')

app.use(express.json())
app.use(cors())

const authRoutes = require("./routes/authRoutes")
const productRoutes = require("./routes/productRoutes")
const cartRoutes = require("./routes/cartRoutes")
 
mongoose.connect('mongodb://127.0.0.1:27017/Coderwing')
.then(()=>{
    console.log("MongoDB Connected")
})
.catch((err)=>{
    console.log(err)
})


app.use("/api",authRoutes)
app.use("/api",productRoutes)
app.use("/api",cartRoutes)


app.listen(5000,()=>{console.log("Server is Running on port 5000")})



