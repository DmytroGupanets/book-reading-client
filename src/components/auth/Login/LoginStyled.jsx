import styled from "styled-components";

const LoginStyled = styled.div`
  .textContainer {
    text-align: center;
    width: 229px;
    padding-top: 18px;
    padding-bottom: 18px;
  }
  .sliderContainer {
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
  .slick-arrow {
    z-index: 5;
    display: "block";
    background-color: #f5f7fa;
    border-radius: 50%;
    width: 30px;
    height: 30px;
  }
  .slick-prev:before,
  .slick-next:before {
    display: none;
  }
  .slick-prev {
    position: absolute;
    top: 50%;
    left: -40px;
  }
  .slick-next {
    position: absolute;
    top: 50%;
    right: -40px;
  }

  @media screen and (min-width: 768px) {
    .slick-arrow {
      width: 50px;
      height: 50px;
    }
    .slick-prev {
      left: -100px;
    }
    .slick-next {
      right: -100px;
    }
    .textContainer {
      width: 526px;
      padding-top: 21px;
      padding-bottom: 21px;
      margin-top: 62px;
    }
    .sliderContainer {
      width: 526px;
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
    .slick-arrow {
      width: 23px;
      height: 23px;
    }
    .textContainer {
      width: 397px;
      padding-top: 100px;
      padding-bottom: 0;
      margin-top: 0;
    }
    .sliderContainer {
      width: 397px;
      padding-top: 100px;
      padding-bottom: 0;
      margin-top: 0;
    }
    .quotesIcon {
      margin-bottom: 15px;
    }
  }
`;

export default LoginStyled;
