import axios from "axios";

export default async function add(req: any, res: any) {
  const {
    query: { whitePlayer, blackPlayer, result, token },
  } = req;

  const userUrl = `https://ptu-bodo-chess-api.azurewebsites.net/match`;
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
        ApiKey: "f4e3b4cc-ed8c-4b73-b8e9-33e4e9c1a712",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  res.status(200).json({
    data: response.data,
  });
}
