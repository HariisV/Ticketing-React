import axios from "axios";

// ENV
const axiosApiInterface = axios.create({
  baseURL: "http://tickez.herokuapp.com/"
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
    return Promise.reject(error);
  }
);

export default axiosApiInterface;
