const express=require("express")
const route=express.Router()

const {SellerMiddleware}=require("../Middlewares/Auth")

const createProduct=require("../Controllers/Product")

route.post("/api/createProduct",SellerMiddleware,createProduct)



module.exports=route