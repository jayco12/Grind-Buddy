import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
    },
    school: {
      type: String,
    },
    hobbies: {
      type: String,
    },
    about: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      max: 50,
    },
    password: {
      type: String,
    },
    img: {
      type: String,
    },
   
  },
  { timestamps: true }
);


export const User = mongoose.models?.User || mongoose.model("User", userSchema);