import mongoose, { Schema } from "mongoose";

const alumniSchema=new Schema({
  name: String,
  email: {
    type:String,
    unique:true
  },
  password: String,
  branch: String,
  graduationYear: Number,
  college: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'College',
  },
  profilePic:{
    type:String,
    default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRewI4tonTOU-MiDbFkpGQ2MN_lMsLZCxSaBg&s"
  },
  bio:{
    type:String,
    default:"Passionate software developer and mentor for upcoming engineers."
  }
})

const Alumni=mongoose.model("Alumni",alumniSchema)
export default Alumni