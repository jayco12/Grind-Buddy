"use server";

import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";
// import { toast } from 'react-toastify';

export const addUser = async (prevState,formData) => {
  const {  
    username,
    email,
    password,
    availability,
    interests,
    major,
    shared_courses,
    study_preferences,
    year_of_study, } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newUser = new User({
      username,
      email,
      password,
      availability,
      interests,
      major,
      shared_courses,
      study_preferences,
      year_of_study,
    });

    await newUser.save();
    console.log("saved to db");
    revalidatePath("/");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await User.findByIdAndDelete(id);
    console.log("deleted from db");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const handleGithubLogin = async () => {
  "use server";
  await signIn("github");
};

export const handleLogout = async () => {
  "use server";
  await signOut();
};

export const register = async (previousState, formData) => {
  const formDataObject = Object.fromEntries(formData);

  const {
    username,
    email,
    password,
    availability,
    interests,
    major,
    shared_courses,
    study_preferences,
    year_of_study,
    passwordRepeat,
  } = formDataObject;

  if (password !== passwordRepeat) {
    return { error: "Passwords do not match" };
  }

  try {
    connectToDb();

    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return { error: "Username already exists" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password,
      availability,
      interests,
      major,
      shared_courses,
      study_preferences,
      year_of_study,
    });

    await newUser.save();
    console.log("saved to db");

    return { success: true };
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const login = async (prevState, formData) => {
  
  const { username } = Object.fromEntries(formData);

  try {
    const result =await signIn("credentials", { redirect: false, username});
    if (result.error) {
      return { error: result.error };
    } else {
      return { success: true };
    }
  } catch (err) {
    console.log(err);
    if (err.message.includes("CredentialsSignin")) {
      return { error: "Invalid username or password" };
    }
    return { error: "Something went wrong!" };
  
  }
};