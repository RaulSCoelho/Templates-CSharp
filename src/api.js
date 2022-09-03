import axios from 'axios';

const api = axios.create({
  withCredentials: true,
  headers: { 'Access-Control-Allow-Credentials': true },
});

export default api;
