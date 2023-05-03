import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { useContext, useState } from "react";
import AuthContext from "@/stores/authContext";
import { LoadingSpinner } from "@/src/components/LoadingSpinner/LoadingSpinner";
import { useRouter } from "next/router";
import PageTemplate from "@/src/components/PageTemplate/PageTemplate";

const DeleteUser = () => {
  const { user, logout } = useContext(AuthContext);
  const [deactivating, setDeactivating] = useState(false);
  const router = useRouter();
  const deactivatingUser = () => {
    setDeactivating(true);
    setTimeout(() => {
      fetch(`https://nrk-chess-api.onrender.com/user?netlifyId=${user.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }).then(() => {
        logout();
        router.push("/");
      });
    }, 3000);
  };
  return (
    <PageTemplate title="Profil">
      <main className={styles.deleteUserMain}>
        {deactivating === false && user != null && (
          <>
            <h2>{`Hei ${user.user_metadata.full_name} her kan du deaktivere brukeren din`}</h2>
            <button
              onClick={deactivatingUser}
              className={styles.deleteUserButton}
            >
              Deaktiver bruker
            </button>
          </>
        )}

        {deactivating === true && (
          <div>
            <h2>Deaktiverer bruker...</h2>
            <LoadingSpinner />
          </div>
        )}
      </main>
    </PageTemplate>
  );
};

export default DeleteUser;
