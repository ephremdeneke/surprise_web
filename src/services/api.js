import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // Adjust this to your backend URL
  timeout: 10000,
});

export default API; 