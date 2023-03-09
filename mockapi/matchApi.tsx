import { IApiMatch, IMatch } from "@/src/interfaces/match";
import { IUser } from "@/src/interfaces/user";
import matchData from "../mockdata/matchlist.json";
import { getUser } from "./userApi";

export const getAllMatches = (): IMatch[] => {
  const matches = createMatchListWithUsers(matchData.matches);
  return matches;
};

function createMatchListWithUsers(matches: IApiMatch[]) {
  const processedMatches: IMatch[] = [];

  matches.forEach((currentMatch) => {
    const blackPlayer: IUser = getUser(currentMatch.blackPlayer);
    const whitePLayer: IUser = getUser(currentMatch.whitePlayer);
    const match: IMatch = {
      time: currentMatch.time,
      whitePlayer: whitePLayer,
      blackPlayer: blackPlayer,
      result: currentMatch.result,
    };
    processedMatches.push(match);
  });

  return processedMatches;
}
