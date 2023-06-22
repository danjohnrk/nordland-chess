import axios from "axios";

export default async function add(req: any, res: any) {
  const {
    query: { netlifyId, name },
  } = req;

  const userUrl = `https://ptu-bodo-chess-api.azurewebsites.net/user`;
  const response = await axios.post(
    userUrl,
    {
      netlifyId: netlifyId,
      name: name,
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
}
