const catlog=require("../Models/Catlog")

const createCatlog=async(req,res)=>{
    try {

        const {userid}=req.user
        const {products,sellerId}=req.body

        if (!products || !Array.isArray(products)) {
            return res.status(400).json({ message: 'Invalid products data' });
          }

        const data=await catlog.create({seller:sellerId,products})

        if(data){
            return res.status(201).json({message:"catlog created sucessfully",data})
        }
        return res.status(500).json({ message: 'Failed to create the catalog' });
        
    } catch (error) {
        console.log(error)
    }
}


module.exports=createCatlog