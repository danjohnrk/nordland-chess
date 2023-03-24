import { IUser } from "@/src/interfaces/user";
import styles from "./UserList.module.css";

interface IProps {
  users: IUser[];
}

export const UserList = (props: IProps) => {
  const { users } = props;
  const usersSortByRanking = users.sort((a, b) => b.rating - a.rating);

  return (
    <ul className={styles.list}>
      <li className={styles.listHeader}>
        <span>Rank</span>
        <span>Navn</span>
        <span>ELO</span>
        <span>Seier</span>
        <span>Tap</span>
        <span>Remi</span>
      </li>
      {usersSortByRanking.map((user, index) => {
        return (
          <li key={user.netlifyId}>
            <a className={styles.listItem} href={`/user/${user.netlifyId}`}>
              <span>{`#${index + 1}`}</span>
              <span>{user.name} </span>
              <span>{user.rating} </span>
              <span>{user.victories} </span>
              <span>{user.losses} </span>
              <span>{user.draws} </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
};
