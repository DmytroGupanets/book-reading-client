import styled from "styled-components";

const FooterStyled = styled.div`
  .FooterWrapper {
    position: relative;
    /* margin-top: 666px; */
    @media screen and (min-width: 768px) {
      /* margin-top: 900px; */
    }
    @media screen and (min-width: 1280px) {
      /* margin-top: 10px; */
    }
  }
  .FooterIcon {
    fill: ${({ colors }) => colors.icons};
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
      fill: ${({ colors }) => colors.icons};
    }

    70% {
      fill: ${({ colors }) => colors.buttonPrimary};
    }

    100% {
      fill: ${({ colors }) => colors.accent};
    }
  }

  .FooterText {
    @media screen and (min-width: 280px) {
      color: ${({ colors }) => colors.buttonPrimary};
      text-align: center;
      font-family: "Montserrat", sans-serif;
      font-size: 14px;
      line-height: 1.22;
      margin-top: 60px;
      margin-bottom: 27px;
      margin-left: auto;
      margin-right: auto;
      width: 200px;
    }

    @media screen and (min-width: 768px) {
      width: 450px;
      font-size: 16px;
      margin-top: 60px;
      margin-bottom: 18px;
    }

    @media screen and (min-width: 1280px) {
      margin-top: 80px;
      width: 900px;
    }
  }

  .FooterButton {
    color: ${({ colors }) => colors.buttonPrimary};
    font-size: 16px;
    font-weight: bold;
    font-family: "Montserrat", sans-serif;
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
      color: ${({ colors }) => colors.buttonPrimary};
    }

    70% {
      color: ${({ colors }) => colors.buttonPrimary};
    }

    100% {
      color: ${({ colors }) => colors.accent};
    }
  }
`;
export default FooterStyled;
