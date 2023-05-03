import { Chessboard } from "@/src/components/Chessboard/Chessboard";
import PageTemplate from "@/src/components/PageTemplate/PageTemplate";
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
      fetch("https://nrk-chess-api.onrender.com/chess_display").then((res) =>
        res.json()
      )
  );
  return (
    <>
      {standingData != null && standingLoading === false && (
        <PageTemplate title="Sjakkbrett">
          <Chessboard standing={standingData.standing} />
        </PageTemplate>
      )}
    </>
  );
};

export default ChessBoardPage;
