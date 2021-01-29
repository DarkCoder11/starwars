import axios from 'axios';

const defaultOptions = {
  baseURL: 'https://react-test-starwars.vercel.app/api',
};

const axiosInstance = axios.create(defaultOptions);

export default axiosInstance;
