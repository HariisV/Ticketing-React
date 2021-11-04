import axios from "../../utils/axios";

export const getTicketByIdUser = (id) => {
  return {
    type: "GET_TICKET",
    payload: axios.get(`/booking?idUser=${id}`) // masukan parameter di dalam path
  };
};

export const updatePassword = (data) => {
  return {
    type: "UPDATE_PASSWORD",
    data: data,
    payload: axios.post("/user/update/password", data) // masukan parameter di dalam path
  };
};
export const updateProfile = (data) => {
  return {
    type: "UPDATE_PROFILE",
    data: data,
    payload: axios.patch("/user/update/profile", data) // masukan parameter di dalam path
  };
};
