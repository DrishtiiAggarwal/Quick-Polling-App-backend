import pool from "../db";
import {
  addUserQuery,
  fetchUser,
  createPollQuery,
  insertOptions,
  fetchPollQueries,
  fetchOptionQueries,
  fetchVotesQueries,
  addVoteQuery,
  fetchVoteQuery,
  updateVoteQuery
} from "../queries/pollQueries";

export const addUser = async (userId:string, userName: string, password: string) => {
  try {
    const result = await pool.query(addUserQuery, [userId,userName, password]);
    return result.rows;
  } catch (err) {
    console.log("Error adding User", err);
    throw err;
  }
};

export const getUser = async (userName: string) => {
  try {
    const result = await pool.query(fetchUser, [userName]);
    return result.rows;
  } catch (err) {
    console.log("Error finding User", err);
    throw err;
  }
};

export const createPollModel = async (
  pollId: string,
  pollTitle: string,
  question: string,
  options: string[]
) => {
  try {
    console.log("PollId", pollId, pollTitle, question, options);
    await pool.query("BEGIN");
    await pool.query(createPollQuery, [pollId, pollTitle, question]);
    for (let i = 0; i < options.length; i++) {
      const option_id= pollId + i;
      await pool.query(insertOptions, [option_id,pollId, options[i]]);
    }
    await pool.query("COMMIT");
  } catch (err) {
    console.log("Error adding poll", err);
    throw err;
  }
};

export const findPollModel = async (pollId: string) => {
  try {
    const pollData = await pool.query(fetchPollQueries, [pollId]);
    const optionData = await pool.query(fetchOptionQueries, [pollId]);
    const votesData = await pool.query(fetchVotesQueries, [pollId]);
    return {
      pollData: pollData.rows,
      optionData: optionData.rows,
      votesData: votesData.rows,
    };
  } catch (err) {
    console.log("Error adding poll", err);
    throw err;
  }
};

export const addVoteModel = async (
  voteId: string,
  userId: string,
  pollId: string,
  optionId: string,
) => {
  try {
    const result = await pool.query(addVoteQuery, [userId, voteId, pollId, optionId]);
    return result.rows;
  } catch (err) {
    console.log("Error adding User", err);
    throw err;
  }
};


export const fetchVoteModel = async (
  userId: string,
  pollId: string,
  
) => {
  try {
    const result = await pool.query(fetchVoteQuery, [userId, pollId]);
    return result.rows;
  } catch (err) {
    console.log("Error adding User", err);
    throw err;
  }
};

export const updateVoteModel = async (
  voteId: string,
  optionId: string,
  
) => {
  try {
    const result = await pool.query(updateVoteQuery, [voteId, optionId]);
    return result.rows;
  } catch (err) {
    console.log("Error adding User", err);
    throw err;
  }
};
