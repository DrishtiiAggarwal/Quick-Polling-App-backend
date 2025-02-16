import {User} from "../types"
import bcrypt from "bcrypt"
import {addUser, getUser} from "../models/pollModel"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

export const createUser = async (userName:string,password:string):Promise<{message:string}> => {
    try{
        const fetchUser = await getUser(userName);
        if(fetchUser){
            return {message:"Username already exists"};
        }
        const hashedPassword = await bcrypt.hash(password,10)
        await addUser(userName,hashedPassword);
        return {message:"User created successfully"};
    }
    catch(error){
        throw error
    }
}

export const userLogin = async (userName:string,password:string):Promise<{message:string}> => {
    try{
        const fetchUser = await getUser(userName);
        if(!fetchUser){
            return {message:"User not found"};
        }
        const isPasswordValid = await bcrypt.compare(password,fetchUser.password);
        if(!isPasswordValid){
            return {message:"Invalid password"};
        }
        const token = jwt.sign({ id: fetchUser.user_id, }, process.env.JWT_SECRET_KEY as string, { expiresIn: '1h' });
        return {message:token};
    }
    catch(error){
        throw error
    }
}
