import { getAllUsers } from "@/mockapi/userApi";
import { IApiRegisterMatch } from "@/src/interfaces/match";
import AuthContext from "@/stores/authContext";
import styles from "./MatchRegister.module.css";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

export const MatchRegister = () => {
  const [match, setMatch] = useState<IApiRegisterMatch>({
    blackPlayer: null,
    whitePlayer: null,
    result: null,
  });
  const router = useRouter();
  const [currentPlayerColor, setCurrentPlayerColor] = useState<
    "white" | "black" | null
  >(null);
  const [opponentId, setOpponentId] = useState<string | null>(null);
  const [result, setResult] = useState<"white" | "black" | "draw" | null>(null);

  const { user, users } = useContext(AuthContext);

  const registerMatch = () => {
    if (
      match.blackPlayer === null ||
      match.whitePlayer === null ||
      match.result === null
    ) {
      return;
    }
    fetch("https://nrk-chess-api.onrender.com/match", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(match),
    });
    router.push("/");
  };

  return (
    <main className={styles.main}>
      {user != null && (
        <div>
          <h2>Velg din farge</h2>
          <div className={styles.colorButtons}>
            <button
              className={styles.colorButtonWhite}
              data-active={currentPlayerColor === "white"}
              onClick={() => {
                const newMatch = match;
                if (newMatch.blackPlayer === user.id) {
                  newMatch.blackPlayer = null;
                }
                newMatch.whitePlayer = user.id;
                setCurrentPlayerColor("white");
                setOpponentId(null);
                setMatch(newMatch);
              }}
            ></button>
            <button
              className={styles.colorButtonBlack}
              data-active={currentPlayerColor === "black"}
              onClick={() => {
                const newMatch = match;
                if (newMatch.whitePlayer === user.id) {
                  newMatch.whitePlayer = null;
                }
                newMatch.blackPlayer = user.id;
                setCurrentPlayerColor("black");
                setOpponentId(null);
                setMatch(newMatch);
              }}
            ></button>
          </div>
          <h2>Velg Mostander</h2>
          {users != null && (
            <ul className={styles.userList}>
              {users.map((opponent) => {
                if (user.id === opponent.netlifyId) {
                  return;
                }
                return (
                  <li key={opponent.netlifyId}>
                    <button
                      className={styles.userButton}
                      data-active={opponentId === opponent.netlifyId}
                      onClick={() => {
                        const newMatch = match;
                        if (currentPlayerColor === null) {
                          return;
                        }
                        if (currentPlayerColor === "black") {
                          newMatch.whitePlayer = opponent.netlifyId;
                        }
                        if (currentPlayerColor === "white") {
                          newMatch.blackPlayer = opponent.netlifyId;
                        }
                        setOpponentId(opponent.netlifyId);
                        setMatch(newMatch);
                      }}
                    >{`${opponent.name} (${opponent.rating})`}</button>
                  </li>
                );
              })}
            </ul>
          )}
          <h2>Sett Resultat</h2>
          <div className={styles.resultButtons}>
            <label className={styles.resultButtonLabel}>
              Sort
              <button
                className={styles.resultButtonBlack}
                data-active={result === "black"}
                onClick={() => {
                  const newMatch = match;
                  newMatch.result = "black";
                  setResult("black");
                }}
              ></button>
            </label>
            <label className={styles.resultButtonLabel}>
              Hvit
              <button
                className={styles.resultButtonWhite}
                data-active={result === "white"}
                onClick={() => {
                  const newMatch = match;
                  newMatch.result = "white";
                  setResult("white");
                }}
              ></button>
            </label>
            <label className={styles.resultButtonLabel}>
              Remi
              <button
                className={styles.resultButtonRemis}
                data-active={result === "draw"}
                onClick={() => {
                  const newMatch = match;
                  newMatch.result = "draw";
                  setResult("draw");
                }}
              ></button>
            </label>
          </div>
          <button className={styles.approve} onClick={registerMatch}>
            Registrer
          </button>
        </div>
      )}
    </main>
  );
};
