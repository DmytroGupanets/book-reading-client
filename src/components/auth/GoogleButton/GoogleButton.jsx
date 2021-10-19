import GoogleLogin from "react-google-login";
import iconGoogle from "../../../images/auth/googleIcon.svg";
import { GoogleButtonStyled } from "./GoogleButtonStyled";
import { useDispatch } from "react-redux";
import { googleAuth } from "../../../redux/auth/authOperations";

const GoogleButton = () => {
  const dispatch = useDispatch();
  const responseGoogle = (response) => {
    const { tokenId } = response;
    if (tokenId) dispatch(googleAuth(tokenId));
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
