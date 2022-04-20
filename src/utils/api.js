import axios from 'axios';
import { API_BACKEND_URL } from './config';

const api = axios.create({
  baseURL: API_BACKEND_URL || 'http://localhost:3003'
});

export default api;