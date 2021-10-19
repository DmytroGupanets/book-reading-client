import styled from "styled-components";
import colors from "../../../../../../styles/colors";
const { darkColors } = colors;

const MyGoalListItemMobStyled = styled.li`
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
  :not(:last-child) {
    margin-bottom: 15px;
  }

  padding-top: 18px;
  padding-bottom: 14px;
  list-style: none;
  display: flex;
  align-items: flex-start;
  background: #ffffff;
  border-top: 1px solid #e0e5eb;

  :last-child {
    border-bottom: 1px solid #e0e5eb;
  }

  font-family: "Montserrat", sans-serif;

  .myGoalListMob_BookTitle {
    color: ${darkColors.primaryText};
    line-height: 1.2;
    margin: 0;
    font-size: 12px;
    font-weight: 500;
    margin-bottom: 5px;
    width: 127px;
  }
  .myGoalListMob_SvgBook {
    height: 17px;
    width: 22px;
    margin-right: 13px;
  }
  .myGoalListMob_SvgDelete {
    height: 18px;
    width: 14px;
  }

  .myGoalListMob_ListContainer {
    display: flex;
  }
  .myGoalListMob_ContainerInfo {
    width: 219px;
  }
  .myGoalListMob_ListInfo1 {
    list-style-type: none;
    padding-left: 0;
    margin-right: 30px;
    font-size: 12px;
    line-height: 3.1;
    color: ${darkColors.secondaryText};
    font-weight: 500;
  }
  .myGoalListMob_ListInfo2 {
    list-style-type: none;
    padding-left: 0;
    font-size: 14px;
    font-weight: 500;
    line-height: 2.7;
  }
  .myGoalListMob_ButtonDelete {
    border: none;
    background-color: inherit;
  }
`;

export default MyGoalListItemMobStyled;
