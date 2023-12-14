import axios from "axios";

export default async function handler(req, res) {
  const options = {
    method: "GET",
    url: "https://ott-details.p.rapidapi.com/gettitleDetails",
    params: { imdbid: req.query.id },
    headers: {
      "x-rapidapi-host": "ott-details.p.rapidapi.com",
      "x-rapidapi-key": "21f04ee643mshb9e4fb48585fbb0p1bc99bjsnea752ad2df7b",
    },
  };

  try {
    let response = await axios(options);
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error.response);
  }
}