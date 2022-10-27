import React from "react";
import { connect } from "react-redux";
import {
  getFormDetails,
  handlePinReveal,
  googlelogInUser,
} from "../../Redux/actions";
import { withRouter } from "react-router-dom";
import GoogleLogin from "react-google-login";

const GoogleSignIn = (props) => {
  const { title } = props;

  const responseGoogle = (response) => {
    if (response.profileObj !== undefined) {
      let profile = response.profileObj;
      let data = {
        email: profile.email,
        idToken: response.tokenId,
        macAddress: "00:00",
      };
      props.getFormDetails({
        props: ["newUserName"],
        value: profile.name,
      });
      props.getFormDetails({
        props: ["newUserEmail"],
        value: profile.email,
      });
      props.googlelogInUser(data);
      // props.getFormDetails({ props: ["googleLogin"], value: 1 });
    }
  };

  return (
    <div className="loginBtn mb-3">
      <GoogleLogin
        clientId="379309600605-obandvmo0lblq2840n4k0e8f55ddo88f.apps.googleusercontent.com"
        render={(renderProps) => (
          <button
            className="clickLogin mb-2 mr-1 t-14 googleBtn"
            onClick={renderProps.onClick}
          >
            <img
              className="mr-3 signupwithgoogle"
              src="/Assets/search.svg"
              alt=""
            />{" "}
            {title ? title : "Sign In with Google"}
          </button>
        )}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

const MapStateToProps = (state) => {
  const { googleLogin } = state.User;
  return {
    googleLogin,
  };
};
export default withRouter(
  connect(MapStateToProps, {
    getFormDetails,
    handlePinReveal,
    googlelogInUser,
  })(GoogleSignIn)
);
