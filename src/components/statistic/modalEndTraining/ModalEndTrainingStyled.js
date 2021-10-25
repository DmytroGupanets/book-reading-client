import styled from "styled-components";

const ModalEndTrainingStyled = styled.div`
  width: 270px;
  height: 296px;
  border-color: none;
  background-color: ${({ colors }) => colors.secondaryBg};
  box-shadow: 10px 10px 20px rgba(9, 30, 63, 0.2);
  @media screen and (min-width: 768px) {
    width: 390px;
    height: 290px;
  }
  .modalText {
    width: 240px;
    height: 80px;
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: ${({ colors }) => colors.primaryText};
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 25px;
    @media screen and (min-width: 768px) {
      width: 296px;
      height: 66px;
    }
  }
  .StatisticModalIcon {
    width: 50px;
    height: 45px;
    margin-top: 48px;
    margin-bottom: 21px;
    overflow: visible;
    fill: ${({ colors }) => colors.icons};

    animation-name: StatisticModalIconColor;
    animation-duration: 2000ms;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }

  @keyframes StatisticModalIconColor {
    0% {
      fill: ${({ colors }) => colors.icons};
    }
    50% {
      transform: scale(1.03);
    }
    100% {
      fill: ${({ colors }) => colors.accent};
    }
  }
`;

export default ModalEndTrainingStyled;
