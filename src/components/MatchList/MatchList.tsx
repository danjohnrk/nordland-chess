import { createTimeLabel } from "@/src/helpers/date";
import { translateResult } from "@/src/helpers/result";
import { IMatch } from "@/src/interfaces/match";
import AuthContext from "@/stores/authContext";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import styles from "./MatchList.module.css";

export const MatchList = () => {
  const { token, retrievingToken } = useContext(AuthContext);
  const [matches, setMatches] = useState([
    {
      time: "string",
      playerWhite: {
        netlifyId: "string",
        name: "string",
        rating: 0,
        victories: 0,
        losses: 0,
        draws: 0,
      },
      playerBlack: {
        netlifyId: "string",
        name: "string",
        rating: 0,
        victories: 0,
        losses: 0,
        draws: 0,
      },
      result: "string",
      playerWhiteCurrentRating: 0,
      playerWhiteRatingChange: 0,
      playerBlackCurrentRating: 0,
      playerBlackRatingChange: 0,
    },
  ]);

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

  if (matches === null) {
    return null;
  }

  matches.sort((a, b) => {
    return new Date(b.time).valueOf() - new Date(a.time).valueOf();
  });

  return (
    <ul className={styles.list}>
      <li className={styles.listHeader}>
        <span>Spillere</span>
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
                  <span>{` (${match.playerWhite.rating})`}</span>
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
