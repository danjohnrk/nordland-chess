import { IUser } from "@/src/interfaces/user";
import styles from "./UserList.module.css";

interface IProps {
  users: IUser[];
}

export const UserList = (props: IProps) => {
  const { users } = props;
  const usersSortByRanking = users.sort((a, b) => b.ranking - a.ranking);

  return (
    <ul className={styles.list}>
      <li className={styles.listHeader}>
        <span>Pl</span>
        <span>Navn</span>
        <span>Etternavn</span>
        <span>Ranking</span>
        <span>Seier</span>
        <span>Tap</span>
        <span>Remi</span>
      </li>
      {usersSortByRanking.map((user, index) => {
        return (
          <li key={user.id}>
            <a className={styles.listItem} href={`/user/${user.id}`}>
              <span>{`#${index + 1}`}</span>
              <span>{user.name} </span>
              <span>{user.surname} </span>
              <span>{user.ranking} </span>
              <span>{user.wins} </span>
              <span>{user.losses} </span>
              <span>{user.remises} </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
};
