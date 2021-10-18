import styled from "styled-components";

const StatisticListStyled = styled.div`
  .statisticTitle {
    font-weight: 700;
    font-size: 12px;
    line-height: 38px;
    color: ${({ colors }) => colors.lightColors.primaryText};

    text-transform: uppercase;
  }
  .statisticList {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .statisticListItem {
    width: 70px;
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

  @media screen and (min-width: 768px) {
    width: 240px;

    text-align: start;

    .statisticTitle {
      font-size: 14px;
    }
  }

  @media screen and (min-width: 1280px) {
    text-align: center;

    .listWrapper {
      overflow: scroll;
      height: 80px;
    }
  } ;
`;

export default StatisticListStyled;
