import axios from "../../utils/axios";

export const registerUser = (data) => {
  console.log("KESINI");
  return {
    type: "REGISTER_USER",
    data: data,
    payload: axios.post("/auth/register", data)
  };
};
