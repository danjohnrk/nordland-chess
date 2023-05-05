import axios from "axios";

export default async function add(req: any, res: any) {
  const {
    query: { whitePlayer, blackPlayer, result, token },
  } = req;

  const userUrl = `https://nrk-chess-api.onrender.com/match`;
  const response = await axios.post(
    userUrl,
    {
      whitePlayer: whitePlayer,
      blackPlayer: blackPlayer,
      result: result,
    },
    {
      headers: {
        "Content-Type": "application/json",
        ApiKey: process.env.API_KEY,
        Authorization: `Bearer ${token}`,
      },
    }
  );
  res.status(200).json({
    data: response.data,
  });
}
