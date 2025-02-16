import { Request,Response } from "express";
import { User } from "../types";
import { createUser ,userLogin } from "../services/pollService";


export const signUp = async (req: Request, res: Response):Promise<any> => {
    try{
        const {username, password} = req.body;
        const addUser = await createUser(username, password);
        res.status(200).send(addUser);
    }catch(err){
        console.log("Error in creating user",err);
        res.status(500).send("Error in creating user");
    }
}

export const login = async (req: Request, res: Response):Promise<any> => {
    try{
        const {username, password} = req.body;
        const addUser = await userLogin(username, password);
        res.status(200).send(addUser);
    }catch(err){
        console.log("Error in creating user",err);
        res.status(500).send("Error in creating user");
    }
}