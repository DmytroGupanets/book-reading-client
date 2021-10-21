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
  :not(:last-child) {
    border-bottom: 1px solid #e0e5eb;
    @media screen and (min-width: 1280px) {
      border-bottom: none;
    }
  }

  .myGoalListNorm_Item__BookSvg {
    width: 22px;
    height: 17px;
    margin-right: 17px;
  }
  .myGoalListNorm_Item__DeleteSvg {
    width: 14px;
    height: 18px;
  }
  .myGoalListNorm_Item__ListFull {
    @media screen and (min-width: 768px) {
      display: flex;
      list-style: none;
      align-items: center;
      padding-top: 11px;
      padding-bottom: 11px;
      padding-left: 0;
    }
  }

  .myGoalListNorm_Item_ListFull_Item {
    color: ${darkColors.primaryText};
    font-size: 14px;
    font-weight: 500;
    line-height: 1.2;
  }
  .myGoalListNorm_Item_ListFull_Item:nth-child(1) {
    width: 180px;
    margin-right: 44px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    @media screen and (min-width: 1280px) {
      -webkit-line-clamp: 1;
      width: 241px;
      margin-right: 81px;
    }
  }
  .myGoalListNorm_Item_ListFull_Item:nth-child(2) {
    width: 139px;
    margin-right: 43px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    @media screen and (min-width: 1280px) {
      -webkit-line-clamp: 1;
      margin-right: 83px;
    }
  }
  .myGoalListNorm_Item_ListFull_Item:nth-child(3) {
    width: 32px;
    margin-right: 70px;
    @media screen and (min-width: 1280px) {
      margin-right: 80px;
      width: 36px;
    }
  }
  .myGoalListNorm_Item_ListFull_Item:nth-child(4) {
    width: 24px;
    margin-right: 48px;
    @media screen and (min-width: 1280px) {
      margin-right: 116px;
    }
  }
  .myGoalListNorm_Item__ButtonDelete {
    border: none;
    cursor: pointer;
    padding: 0;
    background-color: inherit;
  }
`;

export default MyGoalListItemNormalStyled;
