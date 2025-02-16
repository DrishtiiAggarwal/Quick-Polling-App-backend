import { Router } from "express";
import { createPoll,fetchPoll,addVote } from "../controllers/pollControllers";

const route = Router();

route.post('/createpoll',createPoll); 
route.get('/fetchpoll',fetchPoll);
route.post('/addVote',addVote);


export default route;