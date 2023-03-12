import { Chessboard } from "@/src/components/Chessboard/Chessboard";
import AuthContext from "@/stores/authContext";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useContext } from "react";
import { useQuery } from "react-query";

const ChessBoardPage = () => {
  const { user, logout } = useContext(AuthContext);
  const { isLoading: standingLoading, data: standingData } = useQuery(
    "standingData",
    () =>
      fetch(
        "http://ec2-16-171-34-21.eu-north-1.compute.amazonaws.com/chess_display"
      ).then((res) => res.json())
  );
  return (
    <>
      <div className={styles.header}>
        <nav>
          <ul className={styles.headerList}>
            <li>
              {user != null && (
                <button className={styles.loginButton} onClick={logout}>
                  Logg ut
                </button>
              )}
            </li>
            {user != null && (
              <li className={styles.headerListItem}>
                <Link className={styles.loginButton} href="/">
                  Tilbake
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
      {standingData != null && standingLoading === false && (
        <Chessboard standing={standingData.standing} />
      )}
    </>
  );
};

export default ChessBoardPage;
