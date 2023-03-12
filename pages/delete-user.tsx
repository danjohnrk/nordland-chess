import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { useContext, useState } from "react";
import AuthContext from "@/stores/authContext";
import { LoadingSpinner } from "@/src/components/LoadingSpinner/LoadingSpinner";
import { useRouter } from "next/router";

const DeleteUser = () => {
  const { user, logout } = useContext(AuthContext);
  const [deactivating, setDeactivating] = useState(false);
  const router = useRouter();
  const deactivatingUser = () => {
    setDeactivating(true);
    setTimeout(() => {
      fetch(
        `http://ec2-16-171-34-21.eu-north-1.compute.amazonaws.com/user?netlifyId=${user.id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then(() => {
        logout();
        router.push("/");
      });
    }, 3000);
  };
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
            <h2>Aktiverer bruker...</h2>
            <LoadingSpinner />
          </div>
        )}
      </main>
    </>
  );
};

export default DeleteUser;
