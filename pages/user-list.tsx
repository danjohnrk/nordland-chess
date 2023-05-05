import PageTemplate from "@/src/components/PageTemplate/PageTemplate";
import { UserList } from "@/src/components/UserList/UserList";
import AuthContext from "@/stores/authContext";
import { useContext, useEffect, useState } from "react";

const UserListPage = () => {
  const { token, retrievingToken } = useContext(AuthContext);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    if (token === null) {
      return;
    }
    fetch(`/api/user/all?token=${token}`, {
      method: "GET",
    }).then((response) => {
      response.json().then((json) => {
        setUsers(json.data);
      });
    });
  }, [token]);

  return (
    <PageTemplate title="Ranking">
      <>{users != null && <UserList users={users} />}</>
    </PageTemplate>
  );
};

export default UserListPage;
