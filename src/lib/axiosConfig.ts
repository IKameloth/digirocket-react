import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.API_URL,
});

export const setToken = (token: string | null) => {
  axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export default axiosInstance;
