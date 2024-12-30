import express from "express";
import { registerUser,LoginUser,currentUser} from "../Controller/UserController.js";
import validateToken from "../Middlewear/ValidateTokenHandler.js";


const Userrouter = express.Router();

Userrouter.post("/register-user", registerUser);
Userrouter.post("/login-user", LoginUser);
Userrouter.post("/current-user",validateToken,currentUser);

export default Userrouter;

