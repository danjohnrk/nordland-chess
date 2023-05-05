import axios from "axios";

export default async function all(req: any, res: any) {
  const {
    query: { token },
  } = req;

  const matchUrl = `https://nrk-chess-api.onrender.com/match/all`;
  const response = await axios.get(matchUrl, {
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
