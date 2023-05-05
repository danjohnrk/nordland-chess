import axios from "axios";

export default async function add(req: any, res: any) {
  const {
    query: { netlifyId, name },
  } = req;

  const userUrl = `https://nrk-chess-api.onrender.com/user`;
  const response = await axios.post(
    userUrl,
    {
      netlifyId: netlifyId,
      name: name,
    },
    {
      headers: {
        "Content-Type": "application/json",
        ApiKey: process.env.API_KEY,
      },
    }
  );
  res.status(200).json({
    data: response.data,
  });
}
