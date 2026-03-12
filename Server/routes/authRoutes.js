const express=require("express")
const router=express.Router()
const bcrypt=require('bcrypt')

const User=require("../models/User")

router.post("/register", async(req,res)=>{
    try{
        const {name,email,password} = req.body
        const hashPassword = await bcrypt.hash(password,10)
        const user = new User({
            name,
            email,
            password:hashPassword
        })
        await user.save()
        res.json({
            message:"User Registered Successfully"
        })
    }
    catch(err){
        res.json({
            message:"Error"
        })
    }
})

router.post("/login", async (req,res)=>{
    try{
        const {email,password} = req.body
        const user = await User.findOne({email})
        if(!user){
            return res.json({
                message:"User not found"
            })
        }
        const checkPassword = await bcrypt.compare(password,user.password)
        if(!checkPassword){
            return res.json({
                message:"Invalid password"
            })
        }
        res.json({
            message:"Login Successful",
            user
        })
    }
    catch(err){
        res.json({
            message:"Error"
        })
    }
})
module.exports = router