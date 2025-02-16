import { Request, Response } from "express";
import { createUser, userLogin, createPollService,fetchPollService,addVoteService } from "../services/pollService";

export const signUp = async (req: Request, res: Response): Promise<void> => {
    try {
        const { username, password } = req.body;
        const newUser = await createUser(username, password);
        res.status(200).send(newUser);
    } catch (err) {
        console.error("Error in creating user", err);
        res.status(500).send({ message: "Error in creating user" });
    }
};

export const login = async (req: Request, res: Response): Promise<void> => {
    try {
        const { username, password } = req.body;
        const user = await userLogin(username, password);
        res.status(200).send(user);
    } catch (err) {
        console.error("Error in user login", err);
        res.status(500).send({ message: "Error in user login" });
    }
};

export const createPoll = async (req: Request, res: Response): Promise<void> => {
    try {
        const {pollTitle,question, options } = req.body;
        const poll = await createPollService(pollTitle,question, options);
        res.status(200).send(poll);
    } catch (err) {
        console.error("Error in creating poll", err);
        res.status(500).send({ message: "Error in creating poll" });
    }
};

export const fetchPoll = async (req: Request, res: Response): Promise<void> => {
    try {
        const pollId= req.headers.pollid as string;
        if(!pollId || pollId === "" || pollId === "undefined"){
            res.status(400).send({ message: "Poll Id is required" });
        }
        const poll = await fetchPollService(pollId);
        res.status(200).send(poll);
    } catch (err) {
        console.error("Error in fetching poll", err);
        res.status(500).send({ message: "Error in fetching poll" });
    }
};

export const addVote = async (req: Request, res: Response): Promise<void> => {
    try {
        const {voteId, userId,pollId, optionId } = req.body;
        const poll = await addVoteService(voteId,userId,pollId, optionId);
        res.status(200).send(poll);
    } catch (err) {
        console.error("Error in adding vote", err);
        res.status(500).send({ message: "Error in adding vote" });
    }
};
