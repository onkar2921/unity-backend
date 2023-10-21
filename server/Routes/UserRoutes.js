const express=require("express")
const route=express.Router()

const {UserMiddleware,SellerMiddleware}=require("../Middlewares/Auth")

const {getSellerList,getSingleSeller}=require("../Controllers/UserController")

route.get("/api/buyer/list-of-sellers",UserMiddleware,getSellerList)
route.get("/api/buyer/seller-catalog/:sellerId",UserMiddleware,getSingleSeller)


module.exports=route