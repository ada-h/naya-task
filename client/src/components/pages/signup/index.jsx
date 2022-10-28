import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { registerUser } from "../../methods/actions";

//Components
import Nav from "../../reusables/nav";
import Input from "../../reusables/input";
import Button from "../../reusables/button";
import { validateemail } from "../../reusables/helper";
import "./index.css";

const SignUp = () => {
  let dispatch = useDispatch();

  const [firstName, setFirstName] = useState("");
  const [firstNameErr, setFirstNameErr] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameErr, setLastNameErr] = useState("");
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!firstName) {
      setFirstNameErr("Please enter your firstname");
    } else {
      setFirstNameErr("");
    }
    if (!lastName) {
      setLastNameErr("Please enter your last name");
    } else {
      setLastNameErr("");
    }
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

    if (
      password &&
      lastName &&
      firstName &&
      email &&
      validateemail(email) &&
      password
    ) {
      let data = {
        firstname: firstName,
        lastname: lastName,
        email: email,
        password: password,
      };
      dispatch(registerUser(data));
    }
  };

  return (
    <div>
      <Nav />
      <div className="container">
        <div className="row">
          <div className="col-lg-3 offset-lg-5 mt-5">
            <h1 className="primary-color heading t-center">Sign Up</h1>
            <form>
              <Input
                type="text"
                value={firstName}
                placeholder={"First Name"}
                onChange={(e) => setFirstName(e.target.value)}
                errMsg={firstNameErr}
              />
              <Input
                type="text"
                value={lastName}
                placeholder={"Last Name"}
                onChange={(e) => setLastName(e.target.value)}
                errMsg={lastNameErr}
              />
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

              <Button
                type="primary-button mt-3"
                onClick={(e) => handleSignUp(e)}
                title="Sign Up"
              />
              <p className="t-center mt-3 mb-3"> or</p>
              <Button
                type="secondary-button"
                title={
                  <div className="d-flex">
                    <img src="./images/google.svg" alt="Google icon" />{" "}
                    <p> Sign up with Google</p>
                  </div>
                }
              />
              <p className="t-12 t-center mt-3 mb-3">
                {" "}
                Already have an account?{" "}
                <span className="primary-color">
                  {" "}
                  <Link to="/"> Log in</Link>{" "}
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
