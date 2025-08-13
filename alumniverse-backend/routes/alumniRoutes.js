import express from "express";
import { alumniByCollege,getALumniByCollege,getMyProfile,loginAlumni, registerAlumni } from "../controllers/alumniController.js";
import isLoggedIn from "../middlewares/isLoggedIn.js";

const alumniRouter=express.Router()

alumniRouter.post("/register",registerAlumni)
alumniRouter.post("/login",loginAlumni)
alumniRouter.get("/alumni-by-college",isLoggedIn,getALumniByCollege)
alumniRouter.get("/get-my-profile",isLoggedIn,getMyProfile)

export default alumniRouter