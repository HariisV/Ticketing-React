const initialState = {
  count: 0
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE": {
<<<<<<< HEAD
=======
      console.log("REDUXER");
>>>>>>> 491cf2c3e90cbf476e7cd7e4ffde2dddbe4afae8
      return {
        ...state,
        count: state.count + 1
      };
    }
    default: {
      return state;
    }
  }
};

export default counter;
