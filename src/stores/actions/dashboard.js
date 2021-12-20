import axios from "../../utils/axios";

export const getMovie = () => {
<<<<<<< HEAD
=======
  console.log("NYARI");
>>>>>>> 491cf2c3e90cbf476e7cd7e4ffde2dddbe4afae8
  return {
    type: "GET_MOVIE",
    payload: axios.get("/movie?page=1&limit=9994") // masukan parameter di dalam path
  };
};
