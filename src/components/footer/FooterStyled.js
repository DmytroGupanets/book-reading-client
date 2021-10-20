import styled from "styled-components";

const FooterStyled = styled.div`
  .FooterWrapper {
    position: relative;
  }
  .FooterIcon {
    fill: #a6abb9;
    animation-name: changeBookColor;
    animation-duration: 2000ms;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    &:hover {
      animation-play-state: paused;
    }
  }

  @keyframes changeBookColor {
    0% {
      fill: #a6abb9;
    }

    70% {
      fill: #6d7a8d;
    }

    100% {
      fill: #ff6b08;
    }
  }

  .FooterText {
    @media screen and (min-width: 280px) {
      color: #6d7a8d;
      text-align: center;
      font-family: Montserrat;
      font-size: 14px;
      line-height: 1.22;
      margin-top: 60px;
      margin-bottom: 27px;
    }

    @media screen and (min-width: 768px) {
      font-size: 16px;
      margin-top: 60px;
      margin-bottom: 18px;
    }

    @media screen and (min-width: 1280px) {
      margin-top: 80px;
    }
  }

  .FooterButton {
    color: #6d7a8d;
    font-size: 16px;
    font-weight: bold;
    font-family: Montserrat;
    line-height: 1.22;
    background-color: transparent;
    border: none;
    cursor: pointer;

    animation-name: changeColor;
    animation-duration: 2000ms;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    &:hover {
      animation-play-state: paused;
    }
  }

  @keyframes changeColor {
    0% {
      color: #6d7a8d;
    }

    70% {
      color: #6d7a8d;
    }

    100% {
      color: #ff6b08;
    }
  }
`;
export default FooterStyled;
