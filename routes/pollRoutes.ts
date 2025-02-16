import { Router } from "express";
import { createPoll } from "../controllers/pollControllers";

const route = Router();

route.post('/createpoll',createPoll); 


export default route;