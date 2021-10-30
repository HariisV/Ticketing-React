import axios from "axios";
require("dotenv").config();

const axiosApiInterface = axios.create({
  baseURL: process.env.REACT_APP_URL_BACKEND
});
axiosApiInterface.interceptors.request.use(
  function (config) {
    config.headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosApiInterface.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 403) {
      localStorage.clear();
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);

export default axiosApiInterface;
