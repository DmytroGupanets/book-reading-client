import styled from "styled-components";

const StatisticModalStyled = styled.div`
  .StatisticModalWrapper {
    width: 390px;
    height: 290px;
    border: 1px solid;
    border-color: #a6abb9;
    box-shadow: 10px 10px 20px rgba(9, 30, 63, 0.2);
  }
  .StatisticModalIcon {
    width: 50px;
    height: 45px;
    margin-top: 48px;
    margin-bottom: 21px;
    overflow: visible;
    fill: #a6abb9;
    /* transition: transform 250ms linear; */

    animation-name: StatisticModalIconColor;
    animation-duration: 2000ms;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }

  @keyframes StatisticModalIconColor {
    0% {
      fill: #a6abb9;
    }
    50% {
      transform: scale(1.03);
    }
    100% {
      fill: #ff6b08;
    }
  }

  .StatisticModalText {
    width: 296px;
    height: 66px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: #242a37;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 25px;
  }
  .StatisticModalButton {
    width: 130px;
    height: 40px;
    background-color: #ff6b08;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 38px;
    text-align: center;
    color: #ffffff;
    border: none;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    transition: transform 250ms linear;
  }

  .StatisticModalButton:hover,
  .StatisticModalButton:focus {
    transform: scale(1.03);
    color: #242a37;
  }
`;

export default StatisticModalStyled;
