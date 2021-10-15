import styled from "styled-components";

const LoginFormStyled = styled.div`
  width: 100%;
  padding: 30px 25px 20px 25px;

  .form {
    margin-top: 20px;
  }

  .formLabel {
    display: block;
    color: #ffffff;
    font-family: Montserrat, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 38px;
  }

  .formLabelStar {
    color: #f25137;
  }

  .formInput {
    padding: 12px 14px;
    width: 100%;
    height: 42px;
    display: block;
    font-family: Montserrat;
    font-weight: normal;
    font-size: 14px;
    background-color: #f5f7fa;
    box-shadow: inset 0px 1px 2px rgba(29, 29, 27, 0.15);
    border: none;
  }

  .wrapperButton {
    display: flex;
    justify-content: center;
    margin-top: 30px;
    overflow: hidden;
  }

  .authButton {
    padding: 22px 62px;
    color: #ffffff;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    background-color: #ff6b08;
    text-overflow: ellipsis;
    border: none;
    overflow: hidden;
    cursor: pointer;
  }

  .loginContainer {
    margin-top: 12px;
    text-align: center;
    font-family: Montserrat, sans-serif;
    font-weight: 500;
    font-size: 13px;
    color: #898f9f;
  }

  .login {
    margin-left: 4px;
    color: #ff6b08;
    text-decoration: underline;
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    margin: 60px auto;
    padding: 40px 40px 30px 40px;
    width: 100%;
    max-width: 400px;
    background-color: #ffffff;

    .form {
    }

    .formLabel {
      color: #898f9f;
    }
  }

  @media screen and (min-width: 1280px) {
    margin-top: 88px;
    margin-bottom: 92px;
  }
`;

export default LoginFormStyled;
