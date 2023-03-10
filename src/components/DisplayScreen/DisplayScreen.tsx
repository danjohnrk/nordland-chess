import { getAllMatches } from "@/mockapi/matchApi";
import { getAllUsers } from "@/mockapi/userApi";
import Head from "next/head";
import { useEffect, useState } from "react";
import { MatchList } from "../MatchList/MatchList";
import { UserList } from "../UserList/UserList";
import styles from "@/styles/Home.module.css";
import { IMatch } from "@/src/interfaces/match";
import { DisplayScreen__Chessboard } from "./DisplayScreen__Chessboard";
import { getBoardStanding } from "@/mockapi/boardstandingApi";

export const DisplayScreen = () => {
  const [matches, setMatches] = useState<IMatch[]>();
  const { users } = getAllUsers();
  const { standing } = getBoardStanding();

  useEffect(() => {
    const allMatches = getAllMatches();
    setMatches(allMatches);
  }, []);
  return (
    <>
      <Head>
        <title>Nordland Chess</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/chess-board-logo.svg" />
      </Head>
      <main className={styles.main}>
        <UserList users={users} />
        {matches != null && <MatchList matches={matches} />}
        <DisplayScreen__Chessboard standing={standing} />
      </main>
    </>
  );
};
