const initialState = {
  count: 0,
  isLoading: false,
  isError: false,
  msg: "",
  status: ""
};

const movie = (state = initialState, action) => {
  switch (action.type) {
    case "Create_MOVIE_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
        msg: ""
      };
    case "Create_MOVIE_FULFILLED":
      return {
        ...state,
        isLoading: true,
        isError: false,
        msg: action.payload.data.msg,
        status: 200
      };
    case "Create_MOVIE_REJECTED":
      return {
        ...state,
        isLoading: true,
        isError: false,
        msg: action.payload.response.data.msg
      };
    case "UPDATE_MOVIE_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
        msg: ""
      };
    case "UPDATE_MOVIE_FULFILLED":
      return {
        ...state,
        isLoading: true,
        isError: false,
        msg: action.payload.data.msg,
        status: 200
      };
    case "UPDATE_MOVIE_REJECTED":
      return {
        ...state,
        isLoading: true,
        isError: false,
        msg: action.payload.response.data.msg
      };
    case "DELETE_MOVIE_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
        msg: ""
      };
    case "DELETE_MOVIE_FULFILLED":
      return {
        ...state,
        isLoading: true,
        isError: false,
        msg: action.payload.data.msg,
        status: 200
      };
    case "DELETE_MOVIE_REJECTED":
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
export default movie;
