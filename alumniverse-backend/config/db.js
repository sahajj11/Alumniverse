import mongoose from "mongoose";

const connectDb=async()=>{
    try{
        await mongoose.connect("mongodb+srv://sahajrajput1112:9GE8bsB0shJkIoGQ@cluster0.7xjose6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log("db connected")
    }catch(err){
        console.log(err)
    }
}

export default connectDb