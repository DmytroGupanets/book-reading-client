import styled from "styled-components";
import colors from "../../../styles/colors";
const { darkColors } = colors;

const MyGoalCountDefaultStyled = styled.div`
  font-family: "Montserrat", sans-serif;
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
  .MyGoalCount_Title {
    color: ${darkColors.secondaryBg};
    font-size: 20px;
    line-height: 1.9;
    font-weight: 500;
    margin-top: 30px;
    margin-right: 78px;
    padding: 11px 25px;
    text-align: center;
    background: #b1b5c2;
    box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
  }
  .MyGoalCount_Container {
    padding-top: 55px;
    padding-bottom: 55px;
    text-align: center;
    background: #ffffff;
    box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
    margin-bottom: 30px;
  }
  .MyGoalCount_List {
    list-style: none;
    margin: 0;
    display: flex;
    /* justify-content: space-around; */
  }
  .MyGoalCount_Text {
    font-size: 14px;
    width: 66px;
    font-weight: 500;
    color: ${darkColors.secondaryText};
    margin-left: auto;
    margin-right: auto;
    line-height: 1.1;
  }
  .MyGoalCount_Count {
    font-family: "Open Sans", sans-serif;
    font-weight: 700;
    line-height: 0.8;
    width: 100px;
    height: 100px;
    font-size: 45px;
    margin-bottom: 14px;
    padding: 31px 24px;
    background: #f5f7fa;
    box-shadow: 4px 4px 8px rgba(36, 42, 55, 0.15);
  }
`;

export default MyGoalCountDefaultStyled;
