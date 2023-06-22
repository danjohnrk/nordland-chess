import axios from "axios";

export default async function auth(req: any, res: any) {
  const {
    query: { netlifyId },
  } = req;

  const authUrl = `https://ptu-bodo-chess-api.azurewebsites.net/auth`;
  try {
    const response = await axios.post(
      authUrl,
      {
        netlifyId: netlifyId,
      },
      {
        headers: {
          "Content-Type": "application/json",
          ApiKey: "f4e3b4cc-ed8c-4b73-b8e9-33e4e9c1a712",
        },
      }
    );

    res.status(200).json({
      data: response.data,
    });
  } catch (error) {
    console.log(error);
    res.status(200).json({
      data: { token: null, error },
    });
  }
}
