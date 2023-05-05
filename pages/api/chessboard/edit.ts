import axios from "axios";

export default async function edit(req: any, res: any) {
  const {
    query: { token, standing },
  } = req;

  const chessboardUrl = `https://nrk-chess-api.onrender.com/match`;
  const response = await axios.post(
    chessboardUrl,
    {
      json: standing,
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
