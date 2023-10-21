const express=require("express")
const cors=require("cors")
const app=express()
require("dotenv").config()
const ConnectDb=require("./Connections/DB")


// Onkar@2921


// routes import
const AuthRoutes=require("./Routes/AuthRoutes")
const UserRoutes=require("./Routes/UserRoutes")
const CatlogRoutes=require("./Routes/CatlogRoutes")
const OrderRoutes=require("./Routes/OrderRoutes")
const ProductRoutes=require("./Routes/ProductRoutes")
app.use(express.json())
app.use(cors())

const port=process.env.PORT || 8080

//db connection
ConnectDb()

// app.use("/",(req,res)=>{
//     res.send("hey")
// })
app.use(AuthRoutes)
app.use(UserRoutes)
app.use(CatlogRoutes)
app.use(OrderRoutes)
app.use(ProductRoutes)




app.listen(port,()=>{
    console.log(`listening on the port ${port}`)
})


