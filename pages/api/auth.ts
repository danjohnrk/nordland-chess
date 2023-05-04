import axios from "axios";

export default async function auth(req: any, res: any) {
  const {
    query: { netlifyId },
  } = req;

  const userUrl = `https://nrk-chess-api.onrender.com/auth?
  netlifyId=${netlifyId}&apiKey=${process.env.API_KEY}`;
  const response = await axios.post(userUrl);
  res.status(200).json({
    data: response.data,
  });
}
