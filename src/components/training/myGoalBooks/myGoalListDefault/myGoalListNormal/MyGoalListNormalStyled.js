import styled from "styled-components";
import colors from "../../../../../styles/colors";
const { darkColors } = colors;

const MyGoalListNormalStyled = styled.div`
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
  .goal_List {
    @media screen and (min-width: 768px) {
      margin-top: 26px;
      list-style: none;
      display: flex;
      border-top: 1px solid #e0e5eb;
      border-bottom: 1px solid #e0e5eb;
    }
    .goal_item:nth-child(1) {
      margin-right: 234px;
    }
    .goal_item:nth-child(2) {
      margin-right: 168px;
    }
    .goal_item:nth-child(3) {
      margin-right: 47px;
    }
  }
  .goal_item {
    color: ${darkColors.secondaryText};
    font-size: 14px;
    font-weight: 500;
    line-height: 2.7;
  }
  .goal_svg {
    width: 22px;
    height: 17px;
    margin-right: 17px;
  }
  .goal_emptyContainer {
    padding-top: 22px;
    padding-bottom: 22px;
    border-bottom: 1px solid #e0e5eb;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export default MyGoalListNormalStyled;
