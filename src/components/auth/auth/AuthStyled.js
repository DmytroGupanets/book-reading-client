import styled from "styled-components";
import mobile1x from "../../../images/auth/mainImg/auth-mobile1x.webp";
import mobile2x from "../../../images/auth/mainImg/auth-mobile2x.webp";
import tablet1x from "../../../images/auth/mainImg/auth-tablet1x.webp";
import tablet2x from "../../../images/auth/mainImg/auth-tablet2x.webp";
import desktop1x from "../../../images/auth/mainImg/auth-desktop1x.webp";
import desktop2x from "../../../images/auth/mainImg/auth-desktop2x.webp";

const AuthStyled = styled.div`
  .leftSideContainer {
    width: calc(100% / 2);
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
    @media screen and (min-width: 768px) {
      & {
        /* max-width: 1600px; */
        background-image: linear-gradient(
            to right,
            rgba(9, 30, 63, 0.8),
            rgba(9, 30, 63, 0.8)
          ),
          url(${tablet1x});

        @media screen and (min-device-pixel-ratio: 2),
          screen and (min-resolution: 192dpi),
          screen and (min-resolution: 2dppx) {
          background-image: url(${tablet2x});
        }
      }
    }

    .rightSideContainer {
      width: calc(100% / 2);
    }
    @media screen and (min-width: 1280px) {
      & {
        /* max-width: 1600px;
        max-height: 600px; */
        background-image: linear-gradient(
            to right,
            rgba(9, 30, 63, 0.8),
            rgba(9, 30, 63, 0.8)
          ),
          url(${desktop1x});

        @media screen and (min-device-pixel-ratio: 2),
          screen and (min-resolution: 192dpi),
          screen and (min-resolution: 2dppx) {
          background-image: url(${desktop2x});
        }
      }
    }
  }

  @media screen and (min-width: 1280px) {
    .authContainer {
      display: flex;
    }
  }
`;

export default AuthStyled;
