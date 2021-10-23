import styled from "styled-components";

const LogoStyled = styled.div`
  .logoSvg {
    width: 28px;
    height: 28px;

    /* LOGO animation */
    filter: drop-shadow(3px 3px 2px rgba(255, 107, 8, 0.45));
    fill: ${({ colors }) => colors.primaryText};

    animation-name: LogoColor, LogoShadowColor;
    animation-duration: 5000ms;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }

  @keyframes LogoColor {
    0% {
      fill: ${({ colors }) => colors.primaryText};
    }
    45% {
      fill: #3c4148;
    }
    90% {
      fill: #3c4148;
    }
    100% {
      fill: ${({ colors }) => colors.accent};
    }
  }

  @keyframes LogoShadowColor {
    0% {
      filter: drop-shadow(3px 3px 2px rgba(36, 42, 55, 0.25));
    }
    50% {
      filter: drop-shadow(3px 3px 2px rgba(137, 143, 159, 0.25));
    }
    100% {
      filter: drop-shadow(3px 3px 2px rgba(255, 107, 8, 0.25));
    }
  }
`;

export default LogoStyled;
