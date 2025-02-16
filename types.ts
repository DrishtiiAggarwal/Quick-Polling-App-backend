export interface User {
  user_id: string;
  username: string;
  password: string;
}

export interface Poll {
  poll_id: string;
  title: string;
  question:string;
}

export interface Option {
  option_id: string;
  poll_id: string;
  option: string;
}

export interface Vote {
  vote_id: string;
  poll_id: string;
  user_id: string;
  option_id: string;
}
