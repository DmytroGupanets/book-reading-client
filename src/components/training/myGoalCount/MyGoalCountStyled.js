import styled from "styled-components";
import colors from "../../../styles/colors";
const { darkColors } = colors;

const MyGoalCountStyled = styled.section`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  p,
  span,
  ol,
  ul,
  li,
  img {
    margin: 0;
    padding: 0;
    border: 0;
  }
  font-family: "Montserrat", sans-serif;
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);

  @media screen and (min-width: 768px) {
    display: flex;
    box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.25);
    margin-top: 30px;
    padding: 23px 45px 8px 45px;
    margin-bottom: 30px;
  }
  @media screen and (min-width: 1279px) {
    flex-direction: column;
    width: 275px;
    margin-left: 41px;
    padding: 0;
    margin-bottom: 0;
  }
  .MyGoalCount_Title {
    color: ${darkColors.secondaryBg};
    font-size: 20px;
    line-height: 1.9;
    font-weight: 500;
    margin-top: 30px;
    padding: 11px 27px;
    text-align: center;
    background: #b1b5c2;
    @media screen and (min-width: 768px) {
      height: 60px;
      margin-top: 0;
      font-weight: 600;
      margin-right: 78px;
    }
    @media screen and (min-width: 1279px) {
      margin-right: 0;
    }
  }
  .MyGoalCount_Container {
    padding: 55px;
    text-align: center;
    background: #ffffff;

    margin-bottom: 30px;
    @media screen and (min-width: 768px) {
      margin-bottom: 0;
      padding-top: 0;
      padding-bottom: 0;
    }
    @media screen and (min-width: 1279px) {
      padding: 55px 0;
    }
  }
  .MyGoalCount_Item {
    width: 100px;
    height: 100px;
    @media screen and (min-width: 768px) {
      height: 60px;
    }
    @media screen and (min-width: 1279px) {
      height: 100px;
    }
  }
  .MyGoalCount_Item:not(:last-child) {
    margin-right: 20px;
    @media screen and (min-width: 768px) {
      margin-right: 30px;
    }
    @media screen and (min-width: 1279px) {
      margin-right: 20px;
    }
  }

  .MyGoalCount_List {
    list-style: none;
    margin: 0;
    display: flex;
    justify-content: center;
    @media screen and (min-width: 768px) {
      justify-content: center;
    }
  }
  .MyGoalCount_Text {
    font-size: 14px;
    width: 66px;
    font-weight: 500;
    color: ${darkColors.secondaryText};
    margin-left: auto;
    margin-right: auto;
    line-height: 1.2;
    @media screen and (min-width: 768px) {
      font-size: 11px;
      line-height: 1.1;
      width: 100px;
      @media screen and (min-width: 1279px) {
        width: 66px;
      }
    }
  }
  .MyGoalCount_Number {
    font-family: "Open Sans", sans-serif;
    font-weight: 700;
    line-height: 0.8;
    padding: 31px 0;
    text-align: center;
    font-size: 45px;
    margin-bottom: 14px;
    padding: 31px 0;
    background: #f5f7fa;
    box-shadow: 4px 4px 8px rgba(36, 42, 55, 0.15);
    @media screen and (min-width: 768px) {
      margin-bottom: 4px;
      padding: 11px 0;
      font-size: 40px;
      line-height: 0.9;
    }
    @media screen and (min-width: 1279px) {
      padding: 31px 0;
    }
  }
`;

export default MyGoalCountStyled;
