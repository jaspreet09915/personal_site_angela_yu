 import mongoose from "mongoose";
// import handler from "../pages/api/hello";

 const connectDb = handler => async(req,res)=>{
     if(mongoose.connections[0].readyState){
         return handler(req,res)
     }
     try {
         await mongoose.connect(process.env.MONGO_URI)
         console.log("Successfully connected to the database")
     } catch (error) {
        console.log("fail to connect");
        console.log(error)
     }

     return handler(req, res)
 }
 export default connectDb;