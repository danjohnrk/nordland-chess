import axios from "axios";

export default async function facts(req: any, res: any) {
  const {
    query: { token },
  } = req;

  const factUrl = `https://nrk-chess-api.onrender.com/fun_fact/chess`;
  const response = await axios.get(factUrl, {
    headers: {
      "Content-Type": "application/json",
      ApiKey: "f4e3b4cc-ed8c-4b73-b8e9-33e4e9c1a712",
      Authorization: `Bearer ${token}`,
    },
  });
  res.status(200).json({
    data: response.data,
  });
}
