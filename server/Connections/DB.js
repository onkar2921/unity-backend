const mongoose=require("mongoose")
require("dotenv").config()
const ConnectDb=async()=>{

    await mongoose.connect(process.env.MONGO_URI).then((val)=>{
        if(val){
            console.log("connected to the database")
        }
    })
}

module.exports=ConnectDb