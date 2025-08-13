import bcrypt from "bcrypt"
import College from "../models/College.js"
import Alumni from "../models/Alumni.js"
import jwt from "jsonwebtoken"

const SECRET = process.env.JWT_SECRET || "your_jwt_secret"

export const registerAlumni=async(req,res)=>{
    try{
        const {name,email,password,branch,graduationYear}=req.body

        const domain = email.split("@")[1]
        const college=await College.findOne({domain})
        if (!college){
            return res.status(400).json({ message: "College not registered" });
        }

        const exists=await Alumni.findOne({email})
        if(exists){
            return res.status(400).json({ message: "Alumni already registered" });
        }

        const hashedPassword=await bcrypt.hash(password, 10)

        const alumni=new Alumni({
            name,
            email,
            password:hashedPassword,
            branch,
            graduationYear,
            college:college._id
        })

        alumni.save()
        res.status(201).json({ message: "Alumni registered successfully" });
    }catch(err){
        console.log(err)
        res.status(500).json({ message: err });
    }
}

export const loginAlumni=async(req,res)=>{
    const {email,password}=req.body

     try {
    const alumni = await Alumni.findOne({ email }).populate("college")

    if (!alumni) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, alumni.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    const token = jwt.sign(
      { userId: alumni._id, college: alumni.college },
      SECRET,
      { expiresIn: "30d" }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      alumni: {
        name: alumni.name,
        email: alumni.email,
        branch: alumni.branch,
        graduationYear: alumni.graduationYear,
        college: alumni.college.name,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }

}

export const getALumniByCollege=async(req,res,)=>{
  try {
    const collegeId = req.user.college._id;

    const alumni = await Alumni.find({ college: collegeId }).select('-password'); // exclude passwords

    res.status(200).json(alumni);
  } catch (err) {
    console.error('Error fetching alumni by college:', err);
    res.status(500).json({ message: 'Server error while fetching alumni' });
  }

}

export const alumniByCollege=async(req,res)=>{
  try{
  const alumniList=await Alumni.find({college:req.user.college}).populate('college');
  res.json(alumniList)
  }catch(err){
    console.log(err);
    res.status(500).json({ message: 'Server error' });
  }
}

export const getMyProfile=async(req,res)=>{
  try{
    const alumni=await Alumni.findById(req.user._id).populate("college","name").select("-password")

    if (!alumni) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(alumni)

  }catch(err){
    console.error("Error fetching profile:", err);
    res.status(500).json({ message: "Server error" });
  }
}