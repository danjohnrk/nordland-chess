import { TMatchResult } from "../types/match";
import { IUser } from "./user";

export interface IApiMatch {
  time: string;
  whitePlayer: string;
  blackPlayer: string;
  result: string;
}

export interface IMatch {
  time: string;
  whitePlayer: IUser;
  blackPlayer: IUser;
  result: string;
}
