import _const from "../constants";
import axios from "axios";
import config from "../config";

//Register a user
export const registerUser = (data) => {
  return (dispatch) => {
    dispatch({
      type: _const.CREATING_USER,
      payload: true,
    });
    axios
      .post(config.apiUrl + `/register`, data)
      .then((res) => {
        console.log(res, "i am the res here");
        dispatch({
          type: _const.CREATING_USER,
          payload: false,
        });
        dispatch({
          type: _const.USER_CREATED,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: _const.CREATING_USER,
          payload: false,
        });
      });
  };
};

//User log in
export const logInUser = (data) => {
  return (dispatch) => {
    dispatch({
      type: _const.LOGGING_IN_USER,
      payload: true,
    });
    axios
      .post(config.apiUrl + `/login`, data)
      .then((res) => {
        console.log(res, "i am the res here");
        dispatch({
          type: _const.LOGGING_IN_USER,
          payload: false,
        });
        dispatch({
          type: _const.USER_LOGGED_IN,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: _const.LOGGING_IN_USER,
          payload: false,
        });
      });
  };
};
