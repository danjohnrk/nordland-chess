import axios from "axios";

export default async function chessboard(req: any, res: any) {
  const {
    query: { token },
  } = req;

  const chessboardUrl = `https://nrk-chess-api.onrender.com/chess_display`;
  const response = await axios.get(chessboardUrl, {
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
