import { Chessboard } from "@/src/components/Chessboard/Chessboard";
import AuthContext from "@/stores/authContext";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useContext } from "react";

const ChessBoardPage = () => {
  const { user, logout } = useContext(AuthContext);
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
      <Chessboard />
    </>
  );
};

export default ChessBoardPage;
