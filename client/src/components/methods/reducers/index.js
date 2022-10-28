import { combineReducers } from "redux";

//importing all reducer files

import LoaderReducer from "./loaderreducer";
import UserReducer from "./userreducer";

export default combineReducers({
  LoaderReducer,
  UserReducer,
});
