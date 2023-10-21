const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const user=require("../../Models/User")

const register=async(req,res)=>{
    try {
        
        const {name,email,password}=req.body

        const hashPwd= await bcrypt.hashSync(password,12)

        const data=await user.create({name,email,password:hashPwd})
        if(data){
            return res.status(200).json({message:"user register sucessfully",data})
        }
        return res.status(500).json({message:"failed in registration of user"})

    } catch (error) {
        console.log(error)
    }
}


const login=async(req,res)=>{
    try {
        const {email,password}=req.body
        
        const existUser=await user.find({email})
        if(email){
       

            const VerifyPwd= await bcrypt.compareSync(password,existUser[0]?.password)

            if(VerifyPwd){
                
                const userPayload = {
                    _id: existUser[0]._id,
                    name: existUser[0].name,
                    email: existUser[0].email,
                   
                  };
                const token =jwt.sign(userPayload,process.env.SECREATE_KEY)
                return res.status(200).json({message:"user login sucessfully",existUser,token})
                
            }
            return res.status(400).json({message:"something wrong while filling"})

        } 
        return res.status(400).json({message:"user not found "})

    } catch (error) {
        console.log(error)
    }
}

module.exports={register,login}