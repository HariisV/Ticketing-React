import axios from "../../utils/axios";

export const getMovie = () => {
  return {
    type: "GET_MOVIE",
    payload: axios.get("/movie?page=1&limit=9994") // masukan parameter di dalam path
  };
};
