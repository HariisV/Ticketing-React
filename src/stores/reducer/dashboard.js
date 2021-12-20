const initialState = {
  count: 0,
  isLoading: false,
  isError: false,
  msg: "",
  status: ""
};

const dashboard = (state = initialState, action) => {
  switch (action.type) {
    case "GET_MOVIE_PENDING":
<<<<<<< HEAD
=======
      console.log("NYARI PENDING");
>>>>>>> 491cf2c3e90cbf476e7cd7e4ffde2dddbe4afae8
      return {
        ...state,
        isLoading: true,
        isError: false,
        msg: ""
      };
    case "GET_MOVIE_FULFILLED":
      return {
        ...state,
        isLoading: true,
        isError: false,
        msg: action.payload.data.msg,
        status: 200
      };
    case "GET_MOVIE_REJECTED":
      return {
        ...state,
        isLoading: true,
        isError: false,
        msg: action.payload.response.data.msg
      };

      return {
        ...state,
        isLoading: true,
        isError: false,
        msg: action.payload.response.data.msg
      };

    default: {
      return state;
    }
  }
};
export default dashboard;
