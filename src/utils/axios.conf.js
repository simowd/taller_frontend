import axios from 'axios';
import { BACKEND_URL } from './config';

const startAxios = () => {
  //Setup axios URL
  axios.defaults.baseURL = BACKEND_URL;

  axios.interceptors.request.use(request => {
      console.log(request);
      // Edit request config
      return request;
  }, error => {
      console.log(error);
      return Promise.reject(error);
  });
  
  axios.interceptors.response.use(response => {
      console.log(response);
      // Edit response config
      return response;
  }, error => {
      console.log(error);
      return Promise.reject(error);
  });
}

export { startAxios };