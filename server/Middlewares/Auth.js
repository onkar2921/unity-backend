const jwt=require("jsonwebtoken")
require("dotenv").config()
const user=require("../Models/User")

const UserMiddleware=async(req,res,next)=>{
    try {
        const {userid}=req.headers

        if(req.headers?.authorization.startsWith("Bearer")){
            var token=req.headers?.authorization?.split(" ")[1]

            const verifyToken=jwt.verify(token,process.env.SECREATE_KEY)
            if(verifyToken){
                const existUser=await user.findById(userid)
                req.user=userid
                next()
            
            }

        }
        
    } catch (error) {
        console.log(error)
    }
}


const SellerMiddleware=async(req,res,next)=>{
    try {
        const {userid}=req.headers
    

        if(req.headers?.authorization.startsWith("Bearer")){
            var token=req.headers?.authorization?.split(" ")[1]

            const verifyToken=jwt.verify(token,process.env.SECREATE_KEY)
            if(verifyToken){
                const existUser=await user.findById(userid)
                console.log("user--",existUser)
                if(existUser?.role===true){
                    req.user=userid
                    next()

                }
            }

        }
        
    } catch (error) {
        console.log(error)
    }
}


module.exports={UserMiddleware,SellerMiddleware}