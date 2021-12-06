import axios from "../../utils/axios";

export const registerUser = (data) => {
  return {
    type: "REGISTER_USER",
    data: data,
    payload: axios.post("/auth/register", data)
  };
};
