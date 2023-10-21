const mongoose=require("mongoose")

const OrderSchema=new mongoose.Schema({


    products:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"product"
        }
    ],
    orderBy:{
        type:mongoose.Schema.Types.ObjectId,
            ref:"user"
    },
    seller:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }



},{timestamps:true})


const order=mongoose.model("order",OrderSchema)

module.exports=order