import { GoogleButtonStyled } from "./GoogleButtonStyled";
import iconGoogle from "../../../images/auth/googleIcon.svg";

const GoogleButton = () => {
  return (
    <>
      <GoogleButtonStyled>
        <button className="googleButton">
          <svg className="googleIcon" width="18" height="18">
            <use href={iconGoogle + "#icon-google"}></use>
          </svg>
          Google
        </button>
      </GoogleButtonStyled>
    </>
  );
};

export default GoogleButton;
