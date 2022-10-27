import Nav from "../../reusables/nav";
import Input from "../../reusables/input";
import Button from "../../reusables/button";
import "./index.css";

const Login = () => {
  return (
    <section>
      <Nav />
      <div className="center-content">
        <div>
          <h1 className="primary-color heading">Log in to continue</h1>
          <form>
            <Input type="text" value="" placeholder={"Email"} />
            <Input type="password" value="" placeholder={"Password"} />
            <p className="primary-color t-12"> Forgot password?</p>
            <Button type="primary-button" title="Log In" />
            <p className="t-12">
              {" "}
              Don't have an account?{" "}
              <span className="primary-color"> Sign up</span>
            </p>
            <p> or</p>
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
    </section>
  );
};

export default Login;
