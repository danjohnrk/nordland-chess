import { createTimeLabel } from "@/src/helpers/date";
import { translateResult } from "@/src/helpers/result";
import { IMatch } from "@/src/interfaces/match";
import Image from "next/image";
import styles from "./MatchList.module.css";

interface IProps {
  matches: IMatch[];
}
export const MatchList = (props: IProps) => {
  const { matches } = props;

  return (
    <ul className={styles.list}>
      <li className={styles.listHeader}>
        <span>Spillere</span>
        <span>Resultat</span>
        <span className={styles.listHeaderDate}>Dato</span>
      </li>
      {matches.map((match) => {
        return (
          <li key={match.time}>
            <a className={styles.listItem}>
              <div>
                <div>
                  <span>Hvit: </span>
                  <span>
                    {match.whitePlayer.name} {match.whitePlayer.surname}
                  </span>
                  <span>{` (${match.whitePlayer.ranking})`}</span>
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
                  <span>
                    {match.blackPlayer.name} {match.blackPlayer.surname}
                  </span>
                  <span>{` (${match.blackPlayer.ranking})`}</span>
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
