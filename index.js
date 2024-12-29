import express from "express";


const app = express();

const port = 5002;

app.use(express.json());

console.log("I am pro in express");
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
