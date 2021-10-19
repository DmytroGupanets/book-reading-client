import styled from "styled-components";
import colors from "../../../../../styles/colors";
const { darkColors } = colors;

const MyGoalListNormalStyled = styled.section`
  .head_List {
    @media screen and (min-width: 768px) {
      display: flex;
      list-style: none;
      border-top: 1px solid #e0e5eb;
      border-bottom: 1px solid #e0e5eb;
      margin-top: 0;
      margin-bottom: 0;
      padding-left: 0;
    }
  }
  .head_item {
    color: ${darkColors.secondaryText};
    font-size: 14px;
    font-weight: 500;
    line-height: 2.7;
  }
  .head_item:nth-child(1) {
    margin-right: 180px;
  }
  .head_item:nth-child(2) {
    margin-right: 145px;
  }
  .head_item:nth-child(3) {
    margin-right: 78px;
  }
  .books_List {
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
    @media screen and (min-width: 768px) {
      height: 235px;

      overflow-y: auto;
      scrollbar-width: none;
      scrollbar-color: #b1b5c2 #e7e4e4;

      ::-webkit-scrollbar {
        width: 7px;
      }

      ::-webkit-scrollbar-track {
        background: #e7e4e4;
      }

      ::-webkit-scrollbar-thumb {
        background-color: #b1b5c2;
        border-radius: 0px;
        border: 3px none #ffffff;
      }
    }
  }
  .moreBooksContainer {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #e0e5eb;
  }
  .moreBooksContainer_svgBook {
    width: 22px;
    height: 17px;
    margin-right: 17px;
  }
  .moreBooksContainer_points {
    height: 22px;
  }
`;

export default MyGoalListNormalStyled;
