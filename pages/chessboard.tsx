import { Chessboard } from "@/src/components/Chessboard/Chessboard";
import PageTemplate from "@/src/components/PageTemplate/PageTemplate";
import AuthContext from "@/stores/authContext";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";

const ChessBoardPage = () => {
  const { token, retrievingToken } = useContext(AuthContext);
  const [standing, setStanding] = useState(null);

  useEffect(() => {
    if (token === null) {
      return;
    }
    fetch(`/api/chessboard/chessboard?token=${token}`).then((response) => {
      response.json().then((json) => {
        setStanding(json.data.standing);
      });
    });
  }, [token]);

  return (
    <>
      {standing != null && (
        <PageTemplate title="Sjakkbrett">
          <Chessboard standing={standing} />
        </PageTemplate>
      )}
    </>
  );
};

export default ChessBoardPage;
