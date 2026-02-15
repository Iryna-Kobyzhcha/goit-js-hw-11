import axios from "axios";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "54665411-360ba93f793399be536ad6b7c"; 

export function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
  };


  return axios.get(BASE_URL, { params })
    .then(response => response.data) 
    .catch(error => {
      console.error("Помилка запиту до Pixabay:", error);
      throw error; 
    });
}
