import axios from "axios";

export default async function all(req: any, res: any) {
  const {
    query: { token },
  } = req;

  const usersUrl = `https://nrk-chess-api.onrender.com/user/all`;
  const response = await axios.get(usersUrl, {
    headers: {
      "Content-Type": "application/json",
      ApiKey: process.env.API_KEY,
      Authorization: `Bearer ${token}`,
    },
  });
  res.status(200).json({
    data: response.data,
  });
}
