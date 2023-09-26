const express=require("express");
const app=express();
const mongooseConnect=require("./config/config")
const userRouter=require("./routes/authRoutes");


//connect to Database
mongooseConnect();
app.use(express.urlencoded({extended:true}));
app.use(express.json())
//routes
app.use('/',userRouter);

// app.use((err,req,res,next)=>{
//     const statusCode=err.statusCode||500
//     const message=err.message||  'Internal server error';
//     return res.status(statusCode).json({
//         success:false,
//         message,
//         statusCode
//     })
// })

app.listen(5000,()=>{
    console.log('server running on port 5000');
})