const mongoose=require("mongoose")

const UserSchema=new mongoose.Schema({


    name:{
        type:String,
        default:"test user",
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    password :{
        type:String,
        required:true,
        trim:true
    },
    role:{
        type:Boolean,
        default:0 //0---- buyer     1------ seller
    }


},{timestamps:true})


const user=mongoose.model("user",UserSchema)

module.exports=user