import { useContext } from "react";
import AuthContext from "@/stores/authContext";
import { UserList } from "@/src/components/UserList/UserList";
import PageTemplate from "@/src/components/PageTemplate/PageTemplate";

const UserListPage = () => {
  const { users, loadingUsers } = useContext(AuthContext);
  return (
    <PageTemplate title="Ranking">
      {loadingUsers === false && (
        <>{users != null && <UserList users={users} />}</>
      )}
    </PageTemplate>
  );
};

export default UserListPage;
