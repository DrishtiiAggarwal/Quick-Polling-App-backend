import express, { Request, Response } from 'express';
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import pollRoutes from "./routes/pollRoutes";
import loginSignupRoutes from "./routes/loginSignupRoutes";


dotenv.config();
const app = express();
const port: number = 8000;



app.use(cors()); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/polls", pollRoutes);
app.use("/",loginSignupRoutes)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});