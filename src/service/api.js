import axios from 'axios';

const api = axios.create({
  baseURL: 'https://vidapet-backend.herokuapp.com'
});

export default api;