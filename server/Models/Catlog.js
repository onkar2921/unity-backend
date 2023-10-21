const mongoose=require("mongoose")

const CatlogSchema=new mongoose.Schema({


    seller:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"user"
    },
    products:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"product"
        }
    ]


},{timestamps:true})


const catlog=mongoose.model("catlog",CatlogSchema)

module.exports=catlog