const express = require("express")
const router = express.Router()

const Cart = require("../models/Cart")

router.post("/add-cart", async (req,res)=>{
    try{
        const {userId,productId} = req.body
        const cart = new Cart({
            userId,
            productId
        })
        await cart.save()
        res.json({
            message:"Product Added To Cart"
        })
    }
    catch(err){
        res.json({
            message:"Error"
        })
    }
})


router.get("/cart/:userId", async (req,res)=>{

    try{
        const cart = await Cart.find({
            userId: req.params.userId
        }).populate("productId")

        res.json(cart)
    }
    catch(err){

        res.json({
            message:"Error fetching cart"
        })

    }

})


module.exports = router