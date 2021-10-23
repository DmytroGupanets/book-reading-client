import styled from "styled-components";

const MyGoalListDefMobStyled = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  width: 100%;
  font-family: "Montserrat", sans-serif;
  border-top: 1px solid #e0e5eb;
  border-bottom: 1px solid #e0e5eb;
  .goalListMob_container {
    padding-top: 15px;
  }
  .goalListMob_List__ItemListInfo1 {
    list-style-type: none;
    font-size: 12px;
    margin-right: 26px;
    line-height: 3.1;
    color: ${({ colors }) => colors.secondaryText};
    font-weight: 500;
  }
  .goalListMob_List__ItemListInfo2 {
    list-style-type: none;
    font-size: 12px;
    line-height: 2.8;
    color: ${({ colors }) => colors.primaryText};
    font-weight: 500;
  }
  .goalListMob_List_ItemListInfo2__Inner:not(:last-child) {
    margin-bottom: 5px;
  }
  .goalListMob_SvgBook {
    height: 17px;
    width: 22px;
    margin-right: 13px;
  }
  .goalListMob_points {
    font-size: 14px;
    line-height: 3.1;
  }
  .goalListMob_List__container {
    display: flex;
    align-items: center;
    padding-left: 34px;
  }
`;

export default MyGoalListDefMobStyled;
