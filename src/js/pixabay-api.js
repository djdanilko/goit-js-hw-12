import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '55293382-56d7845179b77e1ce3559f450';

export async function getImagesByQuery(query) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });

  return response.data;
}
