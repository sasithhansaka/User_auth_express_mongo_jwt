import express from "express";
import db_connection from "./Config/db_connection.js";
import errorHandler from "./Middlewear/Errorhandler.js";
import Userrouter from "./Routes/UserRoutes.js";

import dotenv from "dotenv";

const app = express();

const port = 5002;

app.use(express.json());
dotenv.config();

db_connection();

app.use(errorHandler);

app.use("/api/user",Userrouter)


console.log("I am pro in express");
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
