import { getAllUsers } from "@/mockapi/userApi";
import { IApiRegisterMatch } from "@/src/interfaces/match";
import AuthContext from "@/stores/authContext";
import styles from "./MatchRegister.module.css";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import ToggleButton from "../ToggleButton/ToggleButton";
import Image from "next/image";
import UserContext from "@/stores/userContext";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";

export const MatchRegister = () => {
  const { user } = useContext(UserContext);
  const [loadingSite, setLoadingSite] = useState(true);
  const [users, setUsers] = useState([
    {
      draws: 0,
      losses: 0,
      name: "daniel",
      netlifyId: "3ebc7928-7f87-4216-b0f7-fef1eaebb62f",
      rating: 300,
      victories: 0,
    },
  ]);
  const { token, retrievingToken } = useContext(AuthContext);

  useEffect(() => {
    if (token === null) {
      return;
    }
    fetch(`/api/user/all?token=${token}`, {
      method: "GET",
    }).then((response) => {
      response.json().then((json) => {
        setUsers(json.data);
      });
    });
  }, [token]);

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
  const [result, setResult] = useState<
    "player-one" | "player-two" | "remis" | null
  >(null);

  useEffect(() => {
    if (match.blackPlayer === null && user !== null)
      setMatch({ blackPlayer: user.id, whitePlayer: null, result: null });
  }, [user, match]);

  const toggleCurrentPlayerColor = () => {
    const newMatch = match;
    if (currentPlayerColor === "black") {
      setCurrentPlayerColor("white");
      newMatch.whitePlayer = user.id;
      newMatch.blackPlayer = null;
      if (opponentId !== null) {
        newMatch.blackPlayer = opponentId;
      }
      setMatch(newMatch);
    }
    if (currentPlayerColor === "white") {
      setCurrentPlayerColor("black");
      newMatch.blackPlayer = user.id;
      newMatch.whitePlayer = null;
      if (opponentId !== null) {
        newMatch.whitePlayer = opponentId;
      }
      setMatch(newMatch);
    }
  };

  const toggleResult = ({
    result,
  }: {
    result: "player-one" | "player-two" | "remis" | null;
  }) => {
    const newMatch = match;

    if (currentPlayerColor === null || opponentId === null) {
      return;
    }

    if (result === "player-one") {
      newMatch.result = currentPlayerColor;
    }

    if (result === "player-two") {
      newMatch.result = currentPlayerColor === "black" ? "white" : "black";
    }

    if (result === "remis") {
      newMatch.result = "draw";
    }

    setResult(result);
    setMatch(newMatch);
  };

  const registerMatch = () => {
    if (
      match.blackPlayer === null ||
      match.whitePlayer === null ||
      match.result === null
    ) {
      return;
    }
    fetch(
      `/api/match/add?whitePlayer=${match.whitePlayer}&blackPlayer=${match.blackPlayer}&result=${match.result}&token=${token}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    router.push("/");
  };

  setTimeout(() => {
    setLoadingSite(false);
  }, 750);

  if (loadingSite) {
    return (
      <div className={styles.activatingScreen}>
        <LoadingSpinner />
      </div>
    );
  }

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
              <h2>Velg vinnner</h2>
              <div className={styles.resultButtons}>
                <label className={styles.resultButtonLabel}>
                  <button
                    className={styles.resultButton}
                    data-active={result === "player-one"}
                    onClick={() => {
                      toggleResult({ result: "player-one" });
                    }}
                  >
                    <div className={styles.selectedCircle}></div>
                  </button>
                  {user.user_metadata.full_name}
                </label>
                <label className={styles.resultButtonLabel}>
                  <button
                    className={styles.resultButton}
                    data-active={result === "player-two"}
                    onClick={() => {
                      toggleResult({ result: "player-two" });
                    }}
                  >
                    <div className={styles.selectedCircle}></div>
                  </button>
                  {
                    users.find((user) => {
                      return user.netlifyId === opponentId;
                    })?.name
                  }
                </label>
                <label className={styles.resultButtonLabel}>
                  <button
                    className={styles.resultButton}
                    data-active={result === "remis"}
                    onClick={() => {
                      toggleResult({ result: "remis" });
                    }}
                  >
                    <div className={styles.selectedCircle}></div>
                  </button>
                  Remis
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
