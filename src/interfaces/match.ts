import { TMatchResult } from "../types/match";
import { IUser } from "./user";

export interface IApiMatch {
  time: string;
  whitePlayer: string;
  blackPlayer: string;
  result: string;
}

export interface IMatch {
  time: {};
  playerWhite: {
    netlifyId: string;
    name: string;
    rating: number;
    victories: number;
    losses: number;
    draws: number;
  };
  playerBlack: {
    netlifyId: string;
    name: string;
    rating: number;
    victories: number;
    losses: number;
    draws: number;
  };

  result: string;
}
export interface IApiRegisterMatch {
  whitePlayer: string | null;
  blackPlayer: string | null;
  result: string | null;
}
