const product=require("../Models/Product")

const createProduct=async(req,res)=>{
    try {
        const {name,price}=req.body

        const data=await product.create({name,price})
        if(data){
            return res.status(201).json({message:"product created sucessfully",data})
        }
        return res.status(500).json({message:"failed int product creation",data})
        
    } catch (error) {
        console.log(error)
    }
}




module.exports=createProduct
