import axios from "axios";

export default async function auth(req: any, res: any) {
  const {
    query: { netlifyId },
  } = req;

  const authUrl = `https://nrk-chess-api.onrender.com/auth`;
  try {
    const response = await axios.post(
      authUrl,
      {
        netlifyId: netlifyId,
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
  } catch (error) {
    res.status(200).json({
      data: { token: null, error },
    });
  }
}
