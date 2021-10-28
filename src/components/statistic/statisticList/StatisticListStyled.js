import styled from "styled-components";

const StatisticListStyled = styled.div`
  .statisticTitle {
    font-weight: 700;
    font-size: 12px;
    line-height: 38px;
    color: ${({ colors }) => colors.primaryText};

    text-transform: uppercase;
  }
  .statisticList {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0;
    padding: 0;
    width: 100%;
    list-style: none;
  }

  .statisticListItem {
    width: calc(100% / 3);
    font-size: 14px;
    line-height: 20px;
    margin-right: 0;
    color: ${({ colors }) => colors.primaryText};
  }
  .statisticListItemTime {
    width: calc(100% / 3);

    margin-left: 5px;
    color: ${({ colors }) => colors.secondaryText};
  }
  .statisticListItemWrapper {
    width: calc(100% / 3);

    color: ${({ colors }) => colors.primaryText};
    display: flex;
    align-items: center;
    justify-content: end;
    padding-right: 20px;
  }

  @media screen and (min-width: 768px) {
    width: 240px;

    text-align: start;

    .statisticTitle {
      font-size: 14px;
    }

    .statisticListItemTime {
      text-align: center;
    }
  }

  @media screen and (min-width: 1280px) {
    text-align: center;

    .listWrapper {
      overflow: scroll;
      overflow-x: hidden;
      height: 80px;
    }

    .statisticListItem {
      margin-right: 0;
    }
  } ;
`;

export default StatisticListStyled;
