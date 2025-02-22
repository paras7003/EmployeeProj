import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import {
  CreateEmployee,
  DeleteEmployee,
  GetEmployees,
  UpdateEmployee,
} from "./controllers/Employee.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.post("/employee", CreateEmployee);
app.put("/employee", UpdateEmployee);
app.delete("/employee", DeleteEmployee);
app.get("/employee", GetEmployees);

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("database connected");
    app.listen(process.env.PORT, () => {
      console.log("Server Running at Port : " + process.env.PORT);
    });
  })
  .catch(() => {
    console.log("database connection error");
  });
