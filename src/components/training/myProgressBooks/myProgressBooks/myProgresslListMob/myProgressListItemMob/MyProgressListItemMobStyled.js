import styled from "styled-components";

const MyProgressListItemMobStyled = styled.li`
  :not(:last-child) {
    margin-bottom: 15px;
  }

  padding-top: 18px;
  padding-bottom: 14px;
  list-style: none;
  display: flex;
  align-items: flex-start;
  justify-content: start;
  border-top: 1px solid #e0e5eb;

  :last-child {
    border-bottom: 1px solid #e0e5eb;
  }

  font-family: "Montserrat", sans-serif;

  .myGoalListMob_BookTitle {
    color: ${({ colors }) => colors.primaryText};
    line-height: 1.2;
    margin: 0;
    font-size: 12px;
    font-weight: 500;
    margin-bottom: 5px;
  }
  .myGoalListMob_CheckBoxSvg {
    height: 15px;
    width: 15px;
    margin-right: 13px;
    background-color: inherit;
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
    color: ${({ colors }) => colors.secondaryText};
    font-weight: 500;
  }
  .myGoalListMob_ListInfo2 {
    list-style-type: none;
    padding-left: 0;
    font-size: 12px;
    font-weight: 500;
    line-height: 3.1;
  }
  .myGoalListMob_ButtonDelete {
    cursor: pointer;
    padding: 0;
    border: none;
    background-color: inherit;
  }
`;

export default MyProgressListItemMobStyled;
