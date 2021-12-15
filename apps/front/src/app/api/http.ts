import axios from 'axios';
import { environment } from '../../environments/environment.prod';


const axiosInstance = axios.create({
  baseURL: environment.API_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const apiToken = sessionStorage.getItem('token');
    if (apiToken) {
      config.headers = { 'x-rapidapi-key': apiToken };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


axiosInstance.interceptors.response.use(
  response => response,
  error => {
    // console.error(`${error.status} ${error.statusText} ${error.config?.method} ${error.config?.url} ${error.config?.data}`);
    return Promise.reject(error);
  },
);

axiosInstance.defaults.headers.common = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};


export default axiosInstance;

