const express=require("express")
const route=express.Router()


const {UserMiddleware,SellerMiddleware}=require("../Middlewares/Auth")
const {createOrder,getSellerOrders}=require("../Controllers/Order")

route.post("/api/buyer/create-order/:sellerId",UserMiddleware,createOrder)
route.get("/api/seller/orders/:sellerId",SellerMiddleware,getSellerOrders)

module.exports=route