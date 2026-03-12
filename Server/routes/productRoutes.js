const express = require("express")
const router = express.Router()

const Product = require("../models/Product")

router.post("/add-product", async(req,res)=>{
    try{
        const {name,price,image} = req.body
        const product = new Product({
            name,
            price,
            image
        })
        await product.save()
        res.json({
            message:"Product Added Successfully"
        })
    }
    catch(err){
        res.json({
            message:"Error"
        })
    }
})

router.get("/products", async(req,res)=>{
    try{
        const products = await Product.find()
        res.json(products)
    }
    catch(err){
        res.json({
            message:"Error"
        })
    }
})

module.exports = router