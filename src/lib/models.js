import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    // school: {
    //   type: String,
    //   required: true,
    // },
  
    email: {
      type: String,
      required: true,
      unique: true,
      max: 50,
    },
    password: {
      type: String,
      required: true,
    },
   
    availability: {
      type: String,
      required: true,
    },
    interests: {
      type: String,
      required: true,
    },
    major: {
      type: String,
      required: true,
    },
    shared_courses: {
      type: String,
      required: true,
    },
    study_preferences: {
      type: String,
      required: true,
    },
    year_of_study: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.models?.User || mongoose.model("User", userSchema);
