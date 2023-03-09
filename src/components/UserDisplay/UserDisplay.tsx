import { IUser } from "@/src/interfaces/user";

interface IProps {
  user: IUser;
}

export const UserDisplay = (props: IProps) => {
  const { user } = props;

  return (
    <div>
      <h2>{user.name}</h2>
      <ul>
        <li>
          <h3>Fult navn: </h3>
          <span>
            {user.name} {user.surname}
          </span>
        </li>
        <li>
          <h3>Seier: </h3>
          <span>{user.wins}</span>
        </li>
        <li>
          <h3>Tap: </h3>
          <span>{user.losses}</span>
        </li>
        <li>
          <h3>Remi: </h3>
          <span>{user.remises}</span>
        </li>
      </ul>
    </div>
  );
};
