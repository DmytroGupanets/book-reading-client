import styled from "styled-components";
import mobile1x from "../../../images/auth/mainImg/auth-mobile1x.webp";
import mobile2x from "../../../images/auth/mainImg/auth-mobile2x.webp";
import tablet1x from "../../../images/auth/mainImg/auth-tablet1x.webp";
import tablet2x from "../../../images/auth/mainImg/auth-tablet2x.webp";
import desktop1x from "../../../images/auth/mainImg/auth-desktop1x.webp";
import desktop2x from "../../../images/auth/mainImg/auth-desktop2x.webp";

const AuthStyled = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.9;
  color: #242a37;
  width: 100%;
  height: calc(50vw - 132px);

  .authContainer {
    height: 100%;
  }

  .rightSideContainer {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .leftSideContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 5px;

    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-color: rgba(9, 30, 63, 0.8);
    background-image: linear-gradient(
        to right,
        rgba(9, 30, 63, 0.8),
        rgba(9, 30, 63, 0.8)
      ),
      url(${mobile1x});

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      background-image: linear-gradient(
          to right,
          rgba(9, 30, 63, 0.8),
          rgba(9, 30, 63, 0.8)
        ),
        url(${mobile2x});
    }

    @media screen and (min-width: 768px) {
      & {
        padding-top: 70px;
        padding-bottom: 70px;
        background-image: linear-gradient(
            to right,
            rgba(9, 30, 63, 0.8),
            rgba(9, 30, 63, 0.8)
          ),
          url(${tablet1x});

        @media screen and (min-device-pixel-ratio: 2),
          screen and (min-resolution: 192dpi),
          screen and (min-resolution: 2dppx) {
          background-image: linear-gradient(
              to right,
              rgba(9, 30, 63, 0.8),
              rgba(9, 30, 63, 0.8)
            ),
            url(${tablet2x});
        }
      }
    }

    @media screen and (min-width: 1280px) {
      width: 44%;
      & {
        background-image: linear-gradient(
            to right,
            rgba(9, 30, 63, 0.8),
            rgba(9, 30, 63, 0.8)
          ),
          url(${desktop1x});

        @media screen and (min-device-pixel-ratio: 2),
          screen and (min-resolution: 192dpi),
          screen and (min-resolution: 2dppx) {
          background-image: linear-gradient(
              to right,
              rgba(9, 30, 63, 0.8),
              rgba(9, 30, 63, 0.8)
            ),
            url(${desktop2x});
        }
      }
    }
  }

  @media screen and (min-width: 1280px) {
    .authContainer {
      display: flex;
    }
    .leftSideContainer {
      margin-bottom: 0;
    }
    .rightSideContainer {
      width: 56%;
    }
  }
`;

export default AuthStyled;
