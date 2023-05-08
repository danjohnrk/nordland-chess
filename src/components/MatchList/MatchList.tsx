import { createTimeLabel } from "@/src/helpers/date";
import { translateResult } from "@/src/helpers/result";
import { IMatch } from "@/src/interfaces/match";
import AuthContext from "@/stores/authContext";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";
import styles from "./MatchList.module.css";

export const MatchList = () => {
  const { token, retrievingToken } = useContext(AuthContext);
  const [matches, setMatches] = useState<IMatch[]>([]);

  useEffect(() => {
    if (token === null) {
      return;
    }
    fetch(`/api/match/all?token=${token}`, {
      method: "GET",
    }).then((response) => {
      response.json().then((json) => {
        setMatches(json.data);
      });
    });
  }, [token]);

  if (retrievingToken || matches === null) {
    return (
      <div className={styles.activatingScreen}>
        <LoadingSpinner />
      </div>
    );
  }

  matches.sort((a, b) => {
    return new Date(b.time).valueOf() - new Date(a.time).valueOf();
  });

  return (
    <ul className={styles.list}>
      <li className={styles.listHeader}>
        <span>Spillere</span>
        <span></span>
        <span>Resultat</span>
        <span className={styles.listHeaderDate}>Dato</span>
      </li>
      {matches.map((match, index) => {
        return (
          <li key={index}>
            <a className={styles.listItem}>
              <div>
                <div>
                  <span>Hvit: </span>
                  <span>{match.playerWhite.name}</span>
                  <span>{` (${match.playerWhiteCurrentRating})`}</span>
                  {match.result === "white" && (
                    <Image
                      src="/winner.svg"
                      alt="Winner Logo"
                      className={styles.winnerLogo}
                      width={8}
                      height={8}
                      priority
                    />
                  )}

                  {match.playerWhiteRatingChange > 0 && (
                    <span className={styles.positiveRatingChange}>
                      {match.playerWhiteRatingChange} ↑
                    </span>
                  )}
                  {match.playerWhiteRatingChange < 0 && (
                    <span className={styles.negativeRatingChange}>
                      {match.playerWhiteRatingChange} ↓
                    </span>
                  )}
                </div>
                <div>
                  <span>Sort: </span>
                  <span>{match.playerBlack.name}</span>
                  <span>{` (${match.playerBlackCurrentRating})`}</span>
                  {match.result === "black" && (
                    <Image
                      src="/winner.svg"
                      alt="Winner Logo"
                      className={styles.winnerLogo}
                      width={8}
                      height={8}
                      priority
                    />
                  )}

                  {match.playerBlackRatingChange > 0 && (
                    <span className={styles.positiveRatingChange}>
                      {match.playerBlackRatingChange} ↑
                    </span>
                  )}
                  {match.playerBlackRatingChange < 0 && (
                    <span className={styles.negativeRatingChange}>
                      {match.playerBlackRatingChange} ↓
                    </span>
                  )}
                </div>
              </div>
              <span>{translateResult(match.result)}</span>
              <span className={styles.listItemTime}>
                {createTimeLabel(match.time)}
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
};
