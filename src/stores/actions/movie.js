import axios from "../../utils/axios";

export const addmovie = (data) => {
  return {
    type: "Create_MOVIE",
    data,
    payload: axios.post("movie", data) // masukan parameter di dalam path
  };
};
export const updateMovie = (data, id) => {
  console.log(data, id);
  return {
    type: "UPDATE_MOVIE",
    data,
    payload: axios.patch(`movie/${id}`, data) // masukan parameter di dalam path
  };
};
