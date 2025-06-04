import express from "express"
import College from "../models/College.js"

const collegeRouter=express.Router()

collegeRouter.post("/add",async(req,res)=>{
    console.log("route")
    try{
        const {name,domain,adminEmail,adminPassword}=req.body

        const exists=await College.findOne({domain})
        if(exists){
            return res.status(400).json({message:"college already registered"})
        }

        const newCollege=new College({name,domain,adminEmail,adminPassword})
        newCollege.save()
         res.status(201).json({ message: 'College added successfully' });
    }catch(err){
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
})

export default collegeRouter