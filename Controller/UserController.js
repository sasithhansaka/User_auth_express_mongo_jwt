import User from "../Models/UserModel.js";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import bcrypt, { hash } from "bcrypt";
import dotenv from "dotenv";

const registerUser = asyncHandler(async (req, res) => {
  const { Full_name, email, password, address } = req.body;

  if (!Full_name || !email || !password || !address) {
    res.status(400);
    throw new Error("All fields are required");
  }

  const userAvailable = await User.findOne({ email });

  if (userAvailable) {
    res.status(400);
    throw new Error("Email is already registered");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  console.log("Hashed Password:", hashedPassword);

  const newUser = await User.create({
    Full_name,
    email,
    password: hashedPassword,
    address,
  });

  if (newUser) {
    console.log(`User created: ${newUser}`);
    res.status(201).json({
      _id: newUser.id,
      Full_name: newUser.Full_name,
      email: newUser.email,
      address: newUser.address,
    });
  } else {
    res.status(500);
    throw new Error("Failed to create user");
  }
});

export { registerUser };
