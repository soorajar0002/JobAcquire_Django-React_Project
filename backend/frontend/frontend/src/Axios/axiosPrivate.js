import axios from 'axios';

const baseURL = 'https://jobacquire.online/api/';

const axiosInstance = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    Authorization: localStorage.getItem('access')
      ? `Bearer ${localStorage.getItem('access')}`
      : null,
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
});
export default axiosInstance;
