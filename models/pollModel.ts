import pool from '../db';
import {addUserQuery} from '../queries/pollQueries';


export const addUser = async (userName:string,password:string) => {
    try{
        const result =await pool.query(addUserQuery,[userName,password]);
        return result.rows;
    }
    catch(err){
        console.log("Error adding User",err);
        throw err;
    }
}

export const getUser = async (userName:string) => {
    try{
        const result =await pool.query(addUserQuery,[userName]);
        return result.rows;
    }
    catch(err){
        console.log("Error adding User",err);
        throw err;
    }
}