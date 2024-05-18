// utils/api.js
import axios from 'axios';

const API_URL = process.env.STRAPI_URL || 'http://localhost:1337';

export async function fetchData(endpoint: string) {
  return axios.get(`${API_URL}/${endpoint}`).then((res) => res.data);
}
