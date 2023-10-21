const express=require("express")
const route=express.Router()

const {SellerMiddleware, UserMiddleware}=require("../Middlewares/Auth")
const createCatlog=require("../Controllers/Catlog")

route.post("/api/seller/create-catalog",UserMiddleware,createCatlog)


module.exports=route