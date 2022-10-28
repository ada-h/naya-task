import _const from "../constants";

const initialState = {
  creatingUser: false,
  loggingUser: false,
};

const LoaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case _const.CREATING_USER:
      return { ...state, creatingUser: action.payload };

    case _const.LOGGING_IN_USER:
      return { ...state, loggingUser: action.payload };

    default:
      return state;
  }
};

export default LoaderReducer;
