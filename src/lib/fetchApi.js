import axios from "axios";

let BASE_URL = "https://youtube-v31.p.rapidapi.com";
let options = {
  params: { maxResults: 50 },
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    Authorization: `Bearer ${import.meta.env.VITE_RAPID_API_KEY}`,
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
