import styled from "styled-components";

const LoginFormStyled = styled.div`
  width: 100%;
  padding: 30px 25px 20px 25px;

  .form {
    margin-top: 20px;
  }

  .emailInput {
    margin-bottom: 10px;
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
    background-color: ${({ colors }) => colors.iconActive};
    box-shadow: inset 0px 1px 2px rgba(29, 29, 27, 0.15);
    border: none;
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
  .wrapperButton {
    display: flex;
    justify-content: center;
    margin-top: 30px;
    overflow: hidden;
  }

  .authButton {
    width: 100%;
    padding: 21px 0;

    color: ${({ colors }) => colors.secondaryBg};
    font-weight: 600;
    font-size: 16px;
    background-color: ${({ colors }) => colors.accent};
    border: none;
    cursor: pointer;

    &:hover {
      background-color: ${({ colors }) => colors.accentActive};
    }
  }

  .registContainer {
    margin-top: 12px;
    text-align: center;
    font-family: Montserrat, sans-serif;
    font-weight: 500;
    font-size: 13px;
    color: ${({ colors }) => colors.secondaryText};
  }

  .registerLink {
    margin-left: 4px;
    color: ${({ colors }) => colors.accent};
    text-decoration: underline;
    cursor: pointer;

    &:hover {
      color: ${({ colors }) => colors.accentActive};
    }
  }

  @media screen and (min-width: 768px) {
    padding: 40px 40px 30px 40px;
    width: 100%;
    max-width: 400px;
    background-color: ${({ colors }) => colors.secondaryBg};

    .formLabel {
      color: ${({ colors }) => colors.secondaryText};
    }
  }

  @media screen and (min-width: 1280px) {
  }
`;

export default LoginFormStyled;
