import Nav from "../../reusables/nav";
import Input from "../../reusables/input";
import Button from "../../reusables/button";
import "./index.css";

const SignUp = () => {
  return (
    <section>
      <Nav />
      <div className="center-content">
        <div>
          <h1 className="primary-color heading">Sign Up</h1>
          <form>
            <Input type="text" value="" placeholder={"First Name"} />
            <Input type="text" value="" placeholder={"Last Name"} />
            <Input type="text" value="" placeholder={"Email"} />
            <Input type="password" value="" placeholder={"Password"} />

            <Button type="primary-button" title="Sign Up" />
            <p> or</p>
            <Button
              type="secondary-button"
              title={
                <div className="d-flex">
                  <img src="./images/google.svg" alt="Google icon" />{" "}
                  <p> Sign up with Google</p>
                </div>
              }
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
