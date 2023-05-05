import { createContext, useEffect, useState } from "react";
import netlifyIdentity from "netlify-identity-widget";

const UserContext = createContext({
  user: { id: null, user_metadata: { full_name: null } },
  loadingUser: true,
  login: () => {},
  logout: () => {},
});

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(() => {
    netlifyIdentity.on("login", (user) => {
      setUser(user);
      netlifyIdentity.close();
      setLoadingUser(false);
      console.log("login event");
    });

    netlifyIdentity.on("logout", () => {
      setUser(null);
      setLoadingUser(false);
      console.log("logout event");
    });

    // init netlify identity connection
    netlifyIdentity.init();
  }, []);

  const login = () => {
    netlifyIdentity.open();
  };

  const logout = () => {
    netlifyIdentity.logout();
  };

  const context = {
    user,
    loadingUser,
    login,
    logout,
  };

  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
};

export default UserContext;
