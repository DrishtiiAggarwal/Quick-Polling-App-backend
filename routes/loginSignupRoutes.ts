import { Router } from "express";
import {signUp,login} from "../controllers/pollControllers";

const route = Router();

route.post("/signUp", signUp);
route.post("/login", login );


export default route;