const initialState = {
  count: 0,
  isLoading: false,
  isError: false,
  msg: "",
  status: "",
  dataTicket: []
};

const ticket = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TICKET_PENDING":
<<<<<<< HEAD
=======
      console.log("PENDING");
>>>>>>> 491cf2c3e90cbf476e7cd7e4ffde2dddbe4afae8
      return {
        ...state,
        isLoading: true,
        isError: false,
        msg: ""
      };
    case "GET_TICKET_FULFILLED":
      return {
        ...state,
        isLoading: true,
        isError: false,
        dataTicket: action.payload.data.data,
        msg: action.payload.data.msg,
        status: 200
      };
    case "GET_TICKET_REJECTED":
<<<<<<< HEAD
=======
      console.log(action);
>>>>>>> 491cf2c3e90cbf476e7cd7e4ffde2dddbe4afae8
      return {
        ...state,
        isLoading: true,
        isError: false,
        msg: action.payload.response.data.msg
      };
    case "UPDATE_PASSWORD_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
        msg: ""
      };
    case "UPDATE_PASSWORD_FULFILLED":
      return {
        ...state,
        isLoading: true,
        isError: false,
        msg: action.payload.data.msg,
        status: 200
      };
    case "UPDATE_PASSWORD_REJECTED":
      return {
        ...state,
        isLoading: true,
        isError: false,
        msg: action.payload.response.data.msg
      };
    case "UPDATE_PROFILE_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
        msg: ""
      };
    case "UPDATE_PROFILE_FULFILLED":
      return {
        ...state,
        isLoading: true,
        isError: false,
        msg: action.payload.data.msg,
        status: 200
      };
    case "UPDATE_PROFILE_REJECTED":
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
export default ticket;
