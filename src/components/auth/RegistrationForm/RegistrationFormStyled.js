import styled from "styled-components";

export const RegistrationFormStyled = styled.div`
  width: 100%;
  padding: 30px 25px 20px 25px;

  .form {
    margin-top: 20px;
  }

  .formLabel {
    display: block;
    color: ${({ colors }) => colors.secondaryBg};
    font-family: "Montserrat", sans-serif;
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
    font-family: "Montserrat", sans-serif;
    font-weight: normal;
    font-size: 14px;
    background-color: ${({ colors }) => colors.iconsActive};
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
    color: ${({ colors }) => colors.secondaryBg};
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    background-color: ${({ colors }) => colors.accent};
    text-overflow: ellipsis;
    border: none;
    overflow: hidden;
    cursor: pointer;
  }

  .loginContainer {
    margin-top: 12px;
    text-align: center;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 13px;
    color: ${({ colors }) => colors.secondaryText};
  }

  .login {
    margin-left: 4px;
    color: ${({ colors }) => colors.accent};
    text-decoration: underline;
    cursor: pointer;
  }
  .formGroup {
    position: relative;
  }
  .inputError {
    position: absolute;
    top: 78px;
    font-size: 10px;
    letter-spacing: 0.04em;

    color: #eb5757;
  }

  @media screen and (min-width: 768px) {
    margin: 60px auto;
    padding: 40px 40px 30px 40px;
    width: 100%;
    max-width: 400px;
    background-color: ${({ colors }) => colors.secondaryBg};

    .form {
    }

    .formLabel {
      color: ${({ colors }) => colors.secondaryText};
    }
  }

  @media screen and (min-width: 1280px) {
    margin-top: 88px;
    margin-bottom: 92px;
  }
`;
