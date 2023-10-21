const order=require("../Models/Order")


const createOrder=async(req,res)=>{
    try {

        const userid=req.user
        // console.log("orserby ---user---",userid)
        const {sellerId}=req.params
        const {products}=req.body

        const data=await order.create({products,orderBy:userid,seller:sellerId})
        if(data){
            return res.status(200).json({message:"order created sucessfully",data})
        }
        return res.status(500).json({message:"failed in  creation of order "})

        
    } catch (error) {
        console.log(error)
    }
}

const getSellerOrders=async(req,res)=>{
    try {
        const {sellerId}=req.params

        const data=await order.find({seller:sellerId})
        if(data){
            return res.status(200).json({message:"getting orders for seller",data})
        }
        return res.status(500).json({message:"failed in getting orders for seller"})
        
    } catch (error) {
        console.log(error)
    }
}


module.exports = { createOrder, getSellerOrders };