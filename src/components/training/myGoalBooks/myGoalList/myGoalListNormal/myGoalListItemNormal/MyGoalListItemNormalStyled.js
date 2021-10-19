import styled from "styled-components";
import colors from "../../../../../../styles/colors";
const { darkColors } = colors;

const MyGoalListItemNormalStyled = styled.li`
  font-family: "Montserrat", sans-serif;
  padding-top: 11px;
  padding-bottom: 11px;
  display: flex;
  height: 60px;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #e0e5eb;

  .books_List__BookSvg {
    width: 22px;
    height: 17px;
    margin-right: 17px;
  }
  .books_List__DeleteSvg {
    width: 14px;
    height: 18px;
  }
  .books_ListFull {
    @media screen and (min-width: 768px) {
      display: flex;
      list-style: none;
      align-items: center;
      padding-top: 11px;
      padding-bottom: 11px;
      padding-left: 0;
    }
  }

  .books_ListFull__Item {
    color: ${darkColors.primaryText};
    font-size: 14px;
    font-weight: 500;
    line-height: 1.2;
  }
  .books_ListFull__Item:nth-child(1) {
    width: 180px;
    margin-right: 44px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .books_ListFull__Item:nth-child(2) {
    width: 139px;
    margin-right: 43px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .books_ListFull__Item:nth-child(3) {
    width: 32px;
    margin-right: 70px;
  }
  .books_ListFull__Item:nth-child(4) {
    width: 24px;
    margin-right: 48px;
  }
`;

export default MyGoalListItemNormalStyled;
