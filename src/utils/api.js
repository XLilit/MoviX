import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;
const headers = {
  Authorization: "brearer" + TMDB_TOKEN,
};
const api_key = "e4f157c1bea5ac40d1ee29757909744d";
export const fetchDataFromApi = async (url, params) => {
  try {
    if (url.includes("&page=")) {
      const { data } = await axios.get(BASE_URL + url + `&api_key=${api_key}`, {
        headers,
        params,
      });
      return data;
    } else {
      const { data } = await axios.get(BASE_URL + url + `?api_key=${api_key}`, {
        headers,
        params,
      });
      return data;
    }
  } catch (e) {
    return e;
  }
};
