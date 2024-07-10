import axios from "axios";

let BASE_URL = "https://youtube-v31.p.rapidapi.com";
let options = {
  params: { maxResults: 50 },
  headers: {
    "X-RapidAPI-Key": "e454ba2126mshe05076ac5bcec7ep173b20jsn7d9becc330bf",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export default async function fetchAPI(url) {
  const URL = `${BASE_URL}/${url}`;
  try {
    const { data } = await axios.get(URL, options);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
