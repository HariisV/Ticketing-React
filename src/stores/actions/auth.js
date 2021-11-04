import axios from "../../utils/axios";

export const login = (data) => {
  return { type: "LOGIN", payload: axios.post("/auth/login", data) };
};

export const getUserById = (data) => {
  return {
    type: "GET_USER",
    payload: axios.post(`/user/detail/${data}`)
  };
};
