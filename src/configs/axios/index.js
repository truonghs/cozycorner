import axios from "axios";

const axiosClient = axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE_URL}/api`,
});

axiosClient.interceptors.request.use((config) => {
  config.withCredentials = false;
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      return Promise.reject(error);
    }
    throw error;
  }
);

export default axiosClient;
