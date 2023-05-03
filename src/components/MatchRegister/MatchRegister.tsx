import { getAllUsers } from "@/mockapi/userApi";
import { IApiRegisterMatch } from "@/src/interfaces/match";
import AuthContext from "@/stores/authContext";
import styles from "./MatchRegister.module.css";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import ToggleButton from "../ToggleButton/ToggleButton";
import Image from "next/image";

export const MatchRegister = () => {
  const { user, users } = useContext(AuthContext);
  const [match, setMatch] = useState<IApiRegisterMatch>({
    blackPlayer: null,
    whitePlayer: null,
    result: null,
  });
  const router = useRouter();
  const [currentPlayerColor, setCurrentPlayerColor] = useState<
    "white" | "black"
  >("black");
  const [opponentId, setOpponentId] = useState<string | null>(null);
  const [result, setResult] = useState<"victory" | "loss" | "remis" | null>(
    null
  );

  useEffect(() => {
    if (match.blackPlayer === null && user !== null)
      setMatch({ blackPlayer: user.id, whitePlayer: null, result: null });
  }, [user, match]);

  const toggleCurrentPlayerColor = () => {
    setCurrentPlayerColor(currentPlayerColor === "black" ? "white" : "black");
    const newMatch = match;

    if (currentPlayerColor === "black") {
      newMatch.blackPlayer = user.id;
      newMatch.whitePlayer = null;
      if (opponentId !== null) {
        newMatch.whitePlayer = opponentId;
      }
    }

    if (currentPlayerColor === "white") {
      newMatch.whitePlayer = user.id;
      newMatch.blackPlayer = null;
      if (opponentId !== null) {
        newMatch.blackPlayer = opponentId;
      }
    }

    if (result !== null) {
      toggleResult({ result });
    }
    setMatch(newMatch);
  };

  const toggleResult = ({
    result,
  }: {
    result: "victory" | "loss" | "remis" | null;
  }) => {
    const newMatch = match;

    if (currentPlayerColor === null || opponentId === null) {
      return;
    }

    if (result === "victory") {
      newMatch.result = currentPlayerColor;
    }

    if (result === "loss") {
      newMatch.result = currentPlayerColor === "black" ? "white" : "black";
    }

    if (result === "remis") {
      newMatch.result = "draw";
    }

    setResult(result);
  };

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
            <div className={styles.colorButtonsColorHeader}>
              <span>{currentPlayerColor === "black" ? "Sort" : "Hvit"}</span>
            </div>
            <ToggleButton toggle={toggleCurrentPlayerColor} />
          </div>
          <section className={styles.oppentSection}>
            <h2>{opponentId === null ? "Velg Motstander" : "Motstander"}</h2>
            {users != null && opponentId === null && (
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
                      >
                        {`${opponent.name} (${opponent.rating})`}
                        <Image
                          src={"/chevron-right-solid.svg"}
                          alt={"Arrow right"}
                          width={16}
                          height={16}
                        />
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
            {users != null && opponentId !== null && (
              <div className={styles.selectedUser}>
                <h3>
                  {
                    users.find((user) => {
                      return user.netlifyId === opponentId;
                    })?.name
                  }
                </h3>
                <button
                  className={styles.changeOpponentButton}
                  onClick={() => {
                    setOpponentId(null);
                  }}
                >
                  Endre Motstander
                  <Image
                    src={"/chevron-right-solid.svg"}
                    alt={"Arrow right"}
                    width={16}
                    height={16}
                  />
                </button>
              </div>
            )}
          </section>
          {opponentId !== null && (
            <section className={styles.resultSection}>
              <h2>Sett Resultat</h2>
              <div className={styles.resultButtons}>
                <label className={styles.resultButtonLabel}>
                  Seier
                  <button
                    className={styles.resultButton}
                    data-active={result === "victory"}
                    onClick={() => {
                      toggleResult({ result: "victory" });
                    }}
                  >
                    <div className={styles.selectedCircle}></div>
                  </button>
                </label>
                <label className={styles.resultButtonLabel}>
                  Tap
                  <button
                    className={styles.resultButton}
                    data-active={result === "loss"}
                    onClick={() => {
                      toggleResult({ result: "loss" });
                    }}
                  >
                    <div className={styles.selectedCircle}></div>
                  </button>
                </label>
                <label className={styles.resultButtonLabel}>
                  Remis
                  <button
                    className={styles.resultButton}
                    data-active={result === "remis"}
                    onClick={() => {
                      toggleResult({ result: "remis" });
                    }}
                  >
                    <div className={styles.selectedCircle}></div>
                  </button>
                </label>
              </div>
              {result !== null && opponentId !== null && (
                <button className={styles.approve} onClick={registerMatch}>
                  Send inn
                </button>
              )}
            </section>
          )}
        </div>
      )}
    </main>
  );
};
