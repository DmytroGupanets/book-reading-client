import LoginStyled from "./LoginStyled";
import quotesIcon from "../../../images/auth/quotes.svg";
import LoginForm from "../LoginForm/LoginForm";

const Login = () => {
  return (
    <LoginStyled className="authContainer">
      <div className="leftSideContainer">
        <LoginForm />
      </div>
      <div className="rightSideContainer">
        <div className="textContainer">
          <svg className="quotesIcon" width="31" height="25">
            <use href={quotesIcon + "#icon-quotes"}></use>
          </svg>
          <p className="loginPageText">
            Книги — это корабли мысли, странствующие по волнам времени и бережно
            несущие свой драгоценный груз от поколения к поколению.
          </p>
          <p className="authorText">Бэкон Ф.</p>
        </div>
      </div>
    </LoginStyled>
  );
};

export default Login;
