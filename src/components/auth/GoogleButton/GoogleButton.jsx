import GoogleLogin from "react-google-login";
import iconGoogle from "../../../images/auth/googleIcon.svg";
import { GoogleButtonStyled } from "./GoogleButtonStyled";

const GoogleButton = () => {
  const responseGoogle = (response) => {
    console.log(response);
  };
  return (
    <>
      <GoogleLogin
        clientId="553525570800-6tkk7jlm1vu8e8o4l9gj3dhvn470il4k.apps.googleusercontent.com"
        render={(renderProps) => (
          <GoogleButtonStyled>
            <button
              className="googleButton"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              <svg className="googleIcon" width="18" height="18">
                <use href={iconGoogle + "#icon-google"}></use>
              </svg>
              Google
            </button>
          </GoogleButtonStyled>
        )}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </>
  );
};

export default GoogleButton;
