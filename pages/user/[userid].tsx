import { getUser } from "@/mockapi/userApi";
import { UserDisplay } from "@/src/components/UserDisplay/UserDisplay";
import { IUser } from "@/src/interfaces/user";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const User = () => {
  // const router = useRouter();
  // const { userid } = router.query;
  // const [user, setUser] = useState<IUser>();

  // useEffect(() => {
  //   if (userid == null) {
  //     return;
  //   }
  //   const user = getUser(userid);
  //   setUser(user);
  // }, [userid]);

  // if (user == null) {
  //   return;
  // }

  // return <UserDisplay user={user} />;
  return <div>USER DISPLAY</div>;
};

export default User;
