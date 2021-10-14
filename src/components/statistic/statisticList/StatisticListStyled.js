import styled from "styled-components";

const StatisticListStyled = styled.div`
  .statisticTitle {
    font-weight: 700;
    font-size: 12px;
    line-height: 38px;
    color: #242a37;
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
    line-height: 38px;
    color: #242a37;
  }
  .statisticListItemTime {
    margin-left: 5px;
    color: #898f9f;
  }
  .statisticListItemWrapper {
    display: flex;
    align-items: center;
    margin-left: 20px;
  }
`;

export default StatisticListStyled;
