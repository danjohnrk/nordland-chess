import userData from "../mockdata/userlist.json";

export const getAllUsers = () => {
  return userData;
};

export const getUser = (userId: string | string[]) => {
  const currentUser = userData.users.find((user) => user.id === userId);

  if (currentUser != null) {
    return currentUser;
  }

  throw Error("No user found");
};
