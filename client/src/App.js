import ReduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import combineReducers from "./components/methods/reducers";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import Login from "./components/pages/login";
import SignUp from "./components/pages/signup";
import Board from "./components/pages/sketch";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const store = createStore(combineReducers, {}, applyMiddleware(ReduxThunk));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/board" element={<Board />} />
        </Routes>
      </Router>
      <ToastContainer />
    </Provider>
  );
}

export default App;
