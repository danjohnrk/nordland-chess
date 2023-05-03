import { useContext } from "react";
import AuthContext from "@/stores/authContext";
import { UserList } from "@/src/components/UserList/UserList";
import PageTemplate from "@/src/components/PageTemplate/PageTemplate";
import { MatchList } from "@/src/components/MatchList/MatchList";
import { useQuery } from "react-query";

const MatchListPage = () => {
  const {
    isLoading: matchLoading,
    error,
    data: matches,
  } = useQuery("matchData", () =>
    fetch("https://nrk-chess-api.onrender.com/match/all").then((res) =>
      res.json()
    )
  );
  return (
    <PageTemplate title="Partier">
      {matches != null && matchLoading === false && (
        <MatchList matches={matches} />
      )}
    </PageTemplate>
  );
};

export default MatchListPage;
