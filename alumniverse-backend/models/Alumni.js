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
})

const Alumni=mongoose.model("Alumni",alumniSchema)
export default Alumni