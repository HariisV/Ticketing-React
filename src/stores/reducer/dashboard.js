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
      console.log("NYARI PENDING");
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
