import styled from "styled-components";
import mobile1x from "../../../images/auth/mainImg/auth-mobile1x.webp";
import mobile2x from "../../../images/auth/mainImg/auth-mobile2x.webp";
import tablet1x from "../../../images/auth/mainImg/auth-tablet1x.webp";
import tablet2x from "../../../images/auth/mainImg/auth-tablet2x.webp";
import desktop1x from "../../../images/auth/mainImg/auth-desktop1x.webp";
import desktop2x from "../../../images/auth/mainImg/auth-desktop2x.webp";

const AuthStyled = styled.div`
  background-color: ${({ colors }) => colors.secondaryBg};
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.9;
  color: ${({ colors }) => colors.primaryText};
  width: 100%;
  /* height: calc(100vh - 132px); */

  .authContainer {
    height: 100%;
  }

  .rightSideContainer {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .leftSideContainer {
    position: relative;
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

    .confirmContainer {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 20px 5px;

      .confirmMassage {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 1.22;
        color: ${({ colors }) => colors.secondaryBg};
      }

      .confirmButton {
        margin-top: 25px;
        padding: 0 20px;
        font-weight: 600;
        font-size: 14px;
        line-height: 2;
        color: ${({ colors }) => colors.secondaryBg};
        background-color: ${({ colors }) => colors.accent};
        border: none;
        cursor: pointer;
      }
    }

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

        .confirmContainer {
          .confirmMassage {
            line-height: 1.58;
            font-size: 24px;
          }
          .confirmButton {
            margin-top: 35px;
            padding: 0 25px;
            font-size: 16px;
            line-height: 2.37;
            transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

            &:hover {
              background-color: ${({ colors }) => colors.accentActive};
            }
          }
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
      height: calc(100vh - 60px);
    }
    .rightSideContainer {
      width: 56%;
    }
  }
`;

export default AuthStyled;
