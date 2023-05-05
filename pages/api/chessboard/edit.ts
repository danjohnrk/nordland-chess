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
        ApiKey: "f4e3b4cc-ed8c-4b73-b8e9-33e4e9c1a712",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  res.status(200).json({
    data: response.data,
  });
}
