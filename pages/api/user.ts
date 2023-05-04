import axios from "axios";

export default async function user(req: any, res: any) {
  const {
    query: { netlifyId, name },
  } = req;

  const userUrl = `https://nrk-chess-api.onrender.com/user?
  netlifyId=${netlifyId}&name=${name}r&apiKey=${process.env.API_KEY}`;
  const response = await axios.post(userUrl);
  res.status(200).json({
    data: response.data,
  });
}
