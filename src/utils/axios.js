import axios from "axios";
require("dotenv").config();

// ENV
const axiosApiInterface = axios.create({
  baseURL: process.env.REACT_APP_URL_BACKEND
});
// console.log(process.env.REACT_APP_BASE_URL);
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
    return Promise.reject(error);
  }
);

export default axiosApiInterface;
