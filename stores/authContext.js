import { createContext, useEffect, useState } from "react";
import netlifyIdentity from "netlify-identity-widget";
import { useQuery } from "react-query";

const AuthContext = createContext({
  user: { id: null, user_metadata: { full_name: null } },
  users: [
    { netlifyId: "", name: "", rating: 0, victories: 0, losses: 0, draws: 0 },
  ],
  login: () => {},
  logout: () => {},
  loadingUsers: true,
  authReady: false,
});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState(null);
  const [loadingUsers, setLoadingUsers] = useState(null);

  const {
    isLoading,
    error,
    data: userData,
  } = useQuery("userData", () =>
    fetch(
      "http://ec2-16-171-34-21.eu-north-1.compute.amazonaws.com/user/all"
    ).then((res) => res.json())
  );

  useEffect(() => {
    setUsers(userData);
    setLoadingUsers(isLoading);
  }, [userData, isLoading]);

  useEffect(() => {
    netlifyIdentity.on("login", (user) => {
      setUser(user);
      netlifyIdentity.close();
      console.log("login event");
    });

    netlifyIdentity.on("logout", () => {
      setUser(null);
      console.log("logout event");
    });

    // init netlify identity connection
    netlifyIdentity.init();
  }, [userData]);

  const login = () => {
    netlifyIdentity.open();
  };

  const logout = () => {
    netlifyIdentity.logout();
  };

  const context = {
    user,
    users,
    login,
    logout,
    loadingUsers,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
