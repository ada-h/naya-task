import { useState } from "react";
import { Link } from "react-router-dom";

//Components
import Nav from "../../reusables/nav";
import Input from "../../reusables/input";
import Button from "../../reusables/button";

import { validateemail } from "../../reusables/helper";

import "./index.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  const handleLogIn = (e) => {
    e.preventDefault();
    if (!email || !validateemail(email)) {
      setEmailErr("Please enter a valid email");
    } else {
      setEmailErr("");
    }
    if (!password) {
      setPasswordErr("Please enter your password");
    } else {
      setPasswordErr("");
    }
  };

  return (
    <div>
      <Nav />
      <div className="container">
        <div className="row">
          <div className="col-lg-3 offset-lg-5 mt-5">
            <h1 className="primary-color heading t-center">
              Log in to continue
            </h1>
            <form>
              <Input
                type="text"
                value={email}
                placeholder={"Email"}
                onChange={(e) => setEmail(e.target.value)}
                errMsg={emailErr}
              />
              <Input
                type="password"
                value={password}
                placeholder={"Password"}
                onChange={(e) => setPassword(e.target.value)}
                errMsg={passwordErr}
              />
              <p className="primary-color t-12 t-center mt-3 mb-3">
                {" "}
                Forgot password?
              </p>
              <Button
                type="primary-button"
                title="Log In"
                onClick={(e) => handleLogIn(e)}
              />
              <p className="t-12 t-center mt-3 mb-3">
                {" "}
                Don't have an account?{" "}
                <span className="primary-color">
                  {" "}
                  <Link to="/sign-up"> Sign up</Link>{" "}
                </span>
              </p>
              <p className="t-center mt-3 mb-3"> or</p>
              <Button
                type="secondary-button"
                title={
                  <div className="d-flex">
                    <img src="./images/google.svg" alt="Google icon" />{" "}
                    <p> Log in with Google</p>
                  </div>
                }
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
