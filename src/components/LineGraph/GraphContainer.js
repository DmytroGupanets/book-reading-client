import Graph from "./Graph";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../App";
import { useTranslation } from "react-i18next";
import { getPagesPerDay } from "../../redux/target/targetSelectors";

const GraphContainer = () => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const pagesPerDay = useSelector(getPagesPerDay);

  return (
    <DivStyled colors={theme}>
      <h3 className="graph__count-page">
        {t("Amount of pages / day")}
        <span>{pagesPerDay}</span>
      </h3>
      <Graph />
      <p className="time-paragraph">{t("TIME")}</p>
    </DivStyled>
  );
};
const DivStyled = styled.div`
  position: relative;
  margin: 0 auto;
  padding-top: 14px;
  padding-bottom: 39px;
  background-color: ${({ colors }) => colors.chartsBg};
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.25);

  > h3 {
    width: 215px;
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 11px;
    line-height: 38px;
    color: ${({ colors }) => colors.primaryText};
  }

  > h3 > span {
    margin-left: 13px;
    font-weight: 600;
    background: ${({ colors }) => colors.iconsActive};
  }
  > p {
    position: absolute;
    left: 74%;
    top: 74%;
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 38px;
    color: ${({ colors }) => colors.digits};
  }
  @media screen and (min-width: 768px) {
    width: 678px;
    padding-top: 25px;
    padding-bottom: 50px;

    > p {
      left: 89%;
    }
  }

  @media screen and (min-width: 1280px) {
    width: 886px;
    padding-top: 25px;
    padding-bottom: 50px;

    > p {
      left: 91%;
    }
  }
`;

export default GraphContainer;
