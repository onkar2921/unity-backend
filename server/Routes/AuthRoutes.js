const express=require("express")
const route=express.Router()

const  {register,login}=require("../Controllers/Auth/Register")


route.post("/api/auth/register",register)
route.post("/api/auth/login",login)

module.exports=route