import axios from "axios";

export default async function all(req: any, res: any) {
  const {
    query: { token },
  } = req;

  const usersUrl = `https://ptu-bodo-chess-api.azurewebsites.net/user/all`;
  const response = await axios.get(usersUrl, {
    headers: {
      "Content-Type": "application/json",
      ApiKey: "f4e3b4cc-ed8c-4b73-b8e9-33e4e9c1a712",
      Authorization: `Bearer ${token}`,
    },
  });
  res.status(200).json({
    data: response.data,
  });
}
