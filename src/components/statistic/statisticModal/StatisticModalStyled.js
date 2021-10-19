import styled from "styled-components";

const StatisticModalStyled = styled.div`
  .StatisticModalWrapper {
    width: 270px;
    height: 500px;
    border-color: none;
    background-color: #ffffff;
    box-shadow: 10px 10px 20px rgba(9, 30, 63, 0.2);
    @media screen and (min-width: 768px) {
      width: 390px;
      height: 500px;
    }
  }
  .StatisticModalIcon {
    width: 50px;
    height: 45px;
    margin-top: 48px;
    margin-bottom: 21px;
    overflow: visible;
    fill: #a6abb9;

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
    width: 240px;
    height: 80px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: #242a37;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 25px;
    @media screen and (min-width: 768px) {
      width: 296px;
      height: 66px;
    }
  }
  .StatisticModalQuote {
    width: 230px;
    height: 160px;
    background-image: url("https://i.ibb.co/jhR2LP4/imgonline-com-ua-Pic-On-Pic-Wnl-Es2-K5ypg-Oe.png");
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 25px;
    padding-left: 5px;
    padding-right: 5px;
    box-shadow: 10px 10px 20px rgba(9, 30, 63, 0.4);
    @media screen and (min-width: 768px) {
      width: 300px;
      height: 180px;
    }
  }
  .quotesIcon {
    margin-top: 10px;
    /* margin-bottom: 10px; */
  }
  .StatisticModalQuoteText {
    padding: 7px;
    margin-bottom: 5px;
    font-size: 14px;
    line-height: 1.2;
    color: #f6f7fb;
    @media screen and (min-width: 768px) {
      font-size: 15px;
    }
  }

  .StatisticModalAuthorText {
    position: relative;
    padding-top: 5px;
    color: #f6f7fb;
    font-size: 13px;
    line-height: 2.7;
    margin-bottom: 15px;
    @media screen and (min-width: 768px) {
      font-size: 14px;
    }

    &::before {
      position: absolute;
      display: block;
      content: "";
      top: 0;
      left: 50%;
      right: 50%;
      width: 150px;
      /* border: 1px solid rgba(36, 42, 55, 0.25); */
      border: 1px solid rgba(246, 247, 251, 0.25);
      transform: translate(-50%, -50%);
    }
  }

  .StatisticModalButton {
    width: 100px;
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
    @media screen and (min-width: 768px) {
      width: 130px;
    }
  }

  .StatisticModalButton:hover,
  .StatisticModalButton:focus {
    transform: scale(1.03);
    color: #242a37;
  }
`;

export default StatisticModalStyled;
