import styled from "styled-components";

const StatisticFormStyled = styled.form`
  .StatisticTitle {
    margin: 0;
    font-weight: 600;
    font-size: 12px;
    line-height: 38px;
    color: ${({ colors }) => colors.lightColors.primaryText};
  }
  .inputWrapper {
    display: flex;
    justify-content: center;
    margin-bottom: 21px;
  }
  .inputWrapper :not(:last-child) {
    margin-right: 20px;
  }
  .statisticFormLabel {
    display: flex;
    flex-direction: column;
    text-align: start;
    margin: 0;
    width: 110px;
    font-weight: 500px;
    font-size: 11px;
    line-height: 38px;
    color: ${({ colors }) => colors.lightColors.secondaryText};
  }
  .statisticInput {
    padding: 0 0 0 13px;
    height: 40px;
    font-size: 14px;
    line-height: 38px;
    color: ${({ colors }) => colors.lightColors.primaryText};
    background: ${({ colors }) => colors.lightColors.background};
    border: 1px solid ${({ colors }) => colors.lightColors.icons};
  }
  .statisticBtn {
    width: 171px;
    height: 42px;
    font-weight: 500;
    font-size: 14px;
    line-height: 38px;
    color: ${({ colors }) => colors.lightColors.secondaryBg};
    background: ${({ colors }) => colors.lightColors.accent};
    border: none;
    cursor: pointer;
  }
  //Select styled ==================================
  .reactSelect__control {
    padding: 0;
    height: 42px;
    width: 100%;
    font-size: 14px;
    line-height: 38px;
    color: ${({ colors }) => colors.lightColors.primaryText};
    background: ${({ colors }) => colors.lightColors.background};
    border: 1px solid solid ${({ colors }) => colors.lightColors.icons};
    border-radius: 0;
  }
  .reactSelect__value-container {
    height: 100%;
    padding: 0px 8px 0px 13px;
  }
  .reactSelect__input-container {
    width: 100px;
  }
  //Select styled ==================================
`;

export default StatisticFormStyled;
