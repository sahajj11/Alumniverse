import express from "express";
import { loginAlumni, registerAlumni } from "../controllers/alumniController.js";

const alumniRouter=express.Router()

alumniRouter.post("/register",registerAlumni)
alumniRouter.post("/login",loginAlumni)

export default alumniRouter