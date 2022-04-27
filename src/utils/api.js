import axios from 'axios';
import { API_BACKEND_URL } from './config';

const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL || API_BACKEND_URL || 'http://localhost:3003'
});

export default api;