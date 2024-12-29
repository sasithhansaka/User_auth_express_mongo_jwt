import express from "express";
import { registerUser} from "../Controller/UserController.js";


const Userrouter = express.Router();

Userrouter.post("/register-user", registerUser);


export default Userrouter;