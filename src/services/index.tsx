import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://brapi.dev/api/quote/'
});
