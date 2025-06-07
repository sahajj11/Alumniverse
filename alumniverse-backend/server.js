import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDb from "./config/db.js"
import collegeRouter from "./routes/college.js"
import alumniRouter from "./routes/alumniRoutes.js"

const app=express()
const PORT=process.env.PORT || 5000

connectDb()

app.use(cors())
app.use(express.json())

app.use("/api/college",collegeRouter)
app.use("/alumni",alumniRouter)

app.get("/",(req,res)=>{
    res.json({message:"hello"})
})

app.listen(PORT,()=>{
    console.log("server started")
})