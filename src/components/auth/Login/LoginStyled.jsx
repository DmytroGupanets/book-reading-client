import styled from "styled-components";

const LoginStyled = styled.div`
  .textContainer {
    text-align: center;
    width: 229px;
    padding-top: 18px;
    padding-bottom: 18px;
  }
  .quotesIcon {
    margin-bottom: 15px;
  }
  .loginPageText {
    margin-bottom: 18px;
    font-size: 13px;
    line-height: 1.2;
  }

  .authorText {
    position: relative;
    padding-top: 9px;
    color: #898f9f;
    font-size: 14px;
    line-height: 2.7;

    &::before {
      position: absolute;
      display: block;
      content: "";
      top: 0;
      left: 50%;
      right: 50%;
      width: 150px;
      border: 1px solid rgba(36, 42, 55, 0.5);
      transform: translate(-50%, -50%);
    }
  }
  @media screen and (min-width: 768px) {
    .textContainer {
      width: 526px;
      padding-top: 21px;
      padding-bottom: 21px;
      margin-top: 62px;
    }
    .loginPageText {
      margin-bottom: 28px;
      font-size: 24px;
      line-height: 1.6;
    }
    .authorText {
      padding-top: 12px;
      font-size: 20px;
      line-height: 1.9;
    }
    .quotesIcon {
      margin-bottom: 34px;
    }
  }

  @media screen and (min-width: 1280px) {
    .textContainer {
      width: 397px;
      padding-top: 0;
      padding-bottom: 0;
      margin-top: 0;
    }
    .quotesIcon {
      margin-bottom: 15px;
    }
  }
`;

export default LoginStyled;
