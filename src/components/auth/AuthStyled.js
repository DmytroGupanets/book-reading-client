import styled from "styled-components";
import mobile1x from "../../images/auth/mainImg/auth-mobile1x.webp";
import mobile2x from "../../images/auth/mainImg/auth-mobile2x.webp";

const AuthStyled = styled.div`
  .leftSideContainer {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    background-color: #091e3f;
    background-image: linear-gradient(
        to right,
        rgba(9, 30, 63, 0.8),
        rgba(9, 30, 63, 0.8)
      ),
      url(${mobile1x});
    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      background-image: url(${mobile2x});
    }
  }

  @media screen and (min-width: 1280px) {
    .authContainer {
      display: flex;
    }
  }
`;

export default AuthStyled;
