import styled from "styled-components";

const SelectDateStyled = styled.label`
  position: relative;

  display: flex;
  flex-direction: column;
  text-align: start;
  width: 110px;
  font-weight: 500px;
  font-size: 11px;
  line-height: 20px;
  color: ${({ colors }) => colors.lightColors.secondaryText};

  .iconSelectDate {
    position: absolute;

    top: 60%;
    left: 80%;
    widows: 13px;
    height: 7px;

    z-index: 1;
  }
  .reactSelect-container {
  }
  .reactSelect__value-container {
    padding: 0 0 0 13px;
  }
  .reactSelect__input-container {
    margin: 0;
  }
  .reactSelect__control {
    height: 40px;
    width: 100%;
    font-size: 14px;
    color: ${({ colors }) => colors.lightColors.primaryText};
    background: ${({ colors }) => colors.lightColors.background};
    border-color: ${({ colors }) => colors.lightColors.icons};
    border-radius: 0;
  }

  .reactSelect__placeholder {
    color: ${({ colors }) => colors.lightColors.primaryText};
  }
  /* .reactSelect__value-container {
    height: 100%;
    padding: 0px 8px 0px 13px;
  } */
  .reactSelect__input-container {
    width: 100px;
  }
`;

export default SelectDateStyled;
