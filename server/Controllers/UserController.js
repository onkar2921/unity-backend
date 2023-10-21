
const user=require("../Models/User")
const catlog=require("../Models/Catlog")
const getSellerList=async(req,res)=>{
    try {

        const data=await user.find({role:1})

        
    if (data.length > 0) {
        return res.status(200).json({ message: 'Getting all sellers', data });
      }
  
      return res.status(404).json({ message: 'No sellers found' });
        
    } catch (error) {
        console.log(error)
    }
}


const getSingleSeller=async(req,res)=>{
    try {
        const {sellerId}=req.params

        const data=await catlog.find({seller:sellerId})

        if(data){
            return res.status(200).json({message:"getting a specific seller",data})
        }
        
        return res.status(500).json({message:"failed in getting a specific seller"})
    
    } catch (error) {
        console.log(error)
    }
}



module.exports = { getSellerList, getSingleSeller };