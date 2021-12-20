import axios from "../../utils/axios";

export const registerUser = (data) => {
<<<<<<< HEAD
=======
  console.log("KESINI");
>>>>>>> 491cf2c3e90cbf476e7cd7e4ffde2dddbe4afae8
  return {
    type: "REGISTER_USER",
    data: data,
    payload: axios.post("/auth/register", data)
  };
};
