import axios from "axios";

export default async function facts(req: any, res: any) {
  const {
    query: { token },
  } = req;

  const factUrl = `https://nrk-chess-api.onrender.com/fun_fact/chess`;
  const response = await axios.get(factUrl, {
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
