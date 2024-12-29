import express from "express";
import { registerUser,LoginUser} from "../Controller/UserController.js";


const Userrouter = express.Router();

Userrouter.post("/register-user", registerUser);
Userrouter.post("/login-user", LoginUser);

export default Userrouter;