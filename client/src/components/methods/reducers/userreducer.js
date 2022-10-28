import _const from "../constants";

const initialState = {
  user: {},
  auth: false,
  loginErr: "",
  created: false,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case _const.USER_CREATED:
      return { ...state, user: action.payload, created: true };

    case _const.USER_LOGGED_IN:
      return { ...state, user: action.payload, auth: true };

    case _const.USER_LOG_IN_FAIL:
      return { ...state, loginErr: action.payload };

    default:
      return state;
  }
};

export default UserReducer;
