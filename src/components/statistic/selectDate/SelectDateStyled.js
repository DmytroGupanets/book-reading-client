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
    width: 13px;
    height: 7px;

    z-index: 1;
    pointer-events: none;
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
    height: 42px;
    width: 100%;
    font-size: 14px;
    color: ${({ colors }) => colors.lightColors.primaryText};
    background: ${({ colors }) => colors.lightColors.background};
    border-color: ${({ colors }) => colors.lightColors.icons};
    border-radius: 0;
  }

  .reactSelect__placeholder {
    font-size: 10px;
    color: ${({ colors }) => colors.lightColors.primaryText};
  }

  .reactSelect__input-container {
    width: 100px;
  }
`;

export default SelectDateStyled;
