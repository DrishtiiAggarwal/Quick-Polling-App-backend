export const addUserQuery = `Insert into users (user_id,username, password) values ($1, $2,$3)`;

export const fetchUser = `SELECT * FROM users WHERE username = $1`;

export const createPollQuery = `INSERT INTO polls(poll_id,title,question) VALUES($1,$2,$3)`;

export const insertOptions = `INSERT INTO options(option_id,poll_id,option) VALUES($1,$2,$3)`;

export const fetchPollQueries = `SELECT * FROM polls WHERE poll_id=$1`;

export const fetchOptionQueries = `SELECT * FROM options WHERE poll_id=$1`;

export const fetchVotesQueries = `SELECT * FROM votes WHERE poll_id=$1`;

export const fetchVoteQuery = `SELECT * FROM votes WHERE user_id=$1 and poll_id=$2`;

export const addVoteQuery = `INSERT INTO votes(vote_id,poll_id,user_id,option_id) VALUES($1,$2,$3,$4)`;

export const updateVoteQuery = `UPDATE votes SET option_id=$2 WHERE vote_id=$1`;