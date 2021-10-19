import Graph from "./Graph";
import styled from "styled-components";

const GraphContainer = () => {
  return (
    <DivStyled>
      <h3 className="graph__count-page">
        КОЛИЧЕСТВО СТРАНИЦ / ДЕНЬ <span>{13}</span>
      </h3>
      <Graph />
      <p className="time-paragraph">ЧАС</p>
    </DivStyled>
  );
};
const DivStyled = styled.div`
  position: relative;
  margin: 0 auto;
  width: 227px;
  padding-top: 14px;
  padding-bottom: 39px;
  padding-left: 22px;
  padding-right: 7px;
  background-color: #fff;
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.25);

  > h3 {
    width: 215px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 11px;
    line-height: 38px;
    color: #242a37;
  }

  > h3 > span {
    margin-left: 13px;
    font-weight: 600;
    background: #f5f7fa;
  }
  > p {
    position: absolute;
    left: 74%;
    top: 74%;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 38px;
    color: #091e3f;
  }
  @media screen and (min-width: 767px) {
    width: 678px;
    padding-top: 25px;
    padding-bottom: 50px;
    padding-left: 36px;
    padding-right: 16px;

    > p {
      left: 89%;
    }
  }

  @media screen and (min-width: 1279px) {
    width: 886px;
    padding-top: 25px;
    padding-bottom: 50px;
    padding-left: 39px;
    padding-right: 16px;

    > p {
      left: 91%;
    }
  }
`;

export default GraphContainer;
