import { User,Option,Vote } from "../types";
import bcrypt from "bcrypt";
import { addUser, getUser, createPollModel,findPollModel,addVoteModel,fetchVoteModel,updateVoteModel } from "../models/pollModel";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { v4 as uuid } from "uuid";

dotenv.config();

export const createUser = async (
  userName: string,
  password: string
): Promise<{ message: string }> => {
  try {
    const fetchUser = await getUser(userName);
    if (fetchUser.length>0) {
      return { message: "Username already exists" };
    }
    const userId=uuid();
    const hashedPassword = await bcrypt.hash(password, 10);
    await addUser(userId,userName, hashedPassword);
    return { message: "User created successfully" };
  } catch (error) {
    throw error;
  }
};

export const userLogin = async (
  userName: string,
  password: string
): Promise<{ message: string; token?: string }> => {
  try {
    const fetchUser = await getUser(userName);
    if (!fetchUser) {
      return { message: "User not found" };
    }
    console.log(fetchUser,password)
    const isPasswordValid = await bcrypt.compare(password, fetchUser[0].password);
    if (!isPasswordValid) {
      return { message: "Invalid password" };
    }

    const token = jwt.sign(
      { id: fetchUser.user_id },
      process.env.JWT_SECRET_KEY as string,
      { expiresIn: "1h" }
    );

    return { message: "Login successful", token };
  } catch (error) {
    throw error;
  }
};

export const createPollService = async (
  pollTitle: string,
  question: string,
  options: string[]
): Promise<{ message: string }> => {
  try {
    const pollId = uuid();
    await createPollModel(pollId, pollTitle, question, options);
    return { message: "Poll created successfully" };
  } catch (error) {
    throw error;
  }
};

export const fetchPollService = async (
  pollId: string,
): Promise<any> => {
  try {
    const {pollData,optionData,votesData }= await findPollModel(pollId); 
    if (!pollData) {
      throw new Error("Poll not found");
    }
    
    const options = optionData.map((option: Option) => {
      const voteCount = votesData.filter((vote: Vote) => vote.option_id === option.option_id).length;
      return {
        optionId: option.option_id,
        option: option.option,
        votes: voteCount
      };
    });
    return {
      pollId: pollData.poll_id,
      pollTitle: pollData.title,
      options
    };
  } catch (error) {
    throw error;
  }
};

export const addVoteService = async (
  voteId: string,
  userId: string,
  pollId: string,
  optionId: string,
): Promise<{ message: string }> => {
  try {
    if(!voteId || voteId === "" || voteId === undefined){
       voteId=uuid();
    }
    const result = await fetchVoteModel(userId, pollId);
    if(result.length>0){
       await updateVoteModel(voteId, optionId);
    }
    else{
      await addVoteModel(userId, voteId, pollId, optionId);
    }
    return { message: "Vote Added successfully" };
  } catch (error) {
    throw error;
  }
};