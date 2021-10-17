import styled from "styled-components";

const StatisticStyled = styled.div`
  margin: 0 auto;
  margin-top: 100px;
  padding: 10px 13px 10px 17px;
  width: 270px;
  text-align: center;
  background-color: #fff;
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);

  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    padding: 10px 84px 40px 84px;
    width: 678px;
  }

  @media screen and (min-width: 1280px) {
    padding: 10px 16px 13px 19px;
    width: 275px;
    height: 340px;
  } ;
`;

export default StatisticStyled;
