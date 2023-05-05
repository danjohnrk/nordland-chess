import axios from "axios";

export default async function remove(req: any, res: any) {
  const {
    query: { netlifyId, token },
  } = req;

  const userUrl = `https://nrk-chess-api.onrender.com/user?netlifyId=${netlifyId}`;
  const response = await axios.delete(userUrl, {
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
