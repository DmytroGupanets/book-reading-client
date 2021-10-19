import styled from "styled-components";
import colors from "../../../../../styles/colors";
const { darkColors } = colors;

const MyGoalListDefMobStyled = styled.div`
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
  margin-top: 20px;
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
    color: ${darkColors.secondaryText};
    font-weight: 500;
  }
  .goalListMob_List__ItemListInfo2 {
    list-style-type: none;
    font-size: 12px;
    line-height: 2.8;
    color: ${darkColors.primaryText};
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
