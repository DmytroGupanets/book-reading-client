import LoginStyled from "./LoginStyled";
import LoginForm from "../LoginForm/LoginForm";
import AuthSlider from "../AuthSlider/AuthSlider";
import { useContext } from "react";
import { ThemeContext } from "../../App";

const Login = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <LoginStyled className="authContainer" colors={theme}>
      <div className="leftSideContainer">
        <LoginForm />
      </div>
      <div className="rightSideContainer">
        <div className="textContainer">
          <AuthSlider />
        </div>
      </div>
    </LoginStyled>
  );
};

export default Login;

//  <svg className="quotesIcon" width="31" height="25">
//             <use href={quotesIcon + "#icon-quotes"}></use>
//           </svg>

//           <p className="loginPageText">
//             Книги — это корабли мысли, странствующие по волнам времени и бережно
//             несущие свой драгоценный груз от поколения к поколению.
//           </p>
//           <p className="authorText">Бэкон Ф.</p>

//import quotesIcon from "../../../images/auth/quotes.svg";
