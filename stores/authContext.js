import { createContext, useContext, useEffect, useState } from "react";
import netlifyIdentity from "netlify-identity-widget";
import { useQuery } from "react-query";
import UserContext from "@/stores/userContext";

const AuthContext = createContext({
  token: null,
  retrievingToken: true,
});

export const AuthContextProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  const [token, setToken] = useState(null);
  const [retrievingToken, setRetrievingToken] = useState(true);

  useEffect(() => {
    if (user === null) {
      return;
    }

    fetch(`/api/auth?netlifyId=${user.id}`, {
      method: "POST",
    }).then((response) => {
      response.json().then((data) => {
        setToken(data.data.token);
        setRetrievingToken(false);
      });
    });
  }, [user]);

  const context = {
    token,
    retrievingToken,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
