import styled from "styled-components";

const StatisticListStyled = styled.div`
  .statisticTitle {
    font-weight: 700;
    font-size: 12px;
    line-height: 38px;
    color: ${({ colors }) => colors.lightColors.primaryText};
  }
  .statisticList {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .statisticListItem {
    width: 100%;
    font-size: 14px;
    line-height: 20px;
    color: ${({ colors }) => colors.lightColors.primaryText};
  }
  .statisticListItemTime {
    margin-left: 5px;
    color: ${({ colors }) => colors.lightColors.secondaryText};
  }
  .statisticListItemWrapper {
    display: flex;
    align-items: center;
    margin-left: 20px;
  }
`;

export default StatisticListStyled;
