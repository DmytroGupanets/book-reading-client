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
  color: ${({ colors }) => colors.secondaryText};

  .iconSelectDate {
    position: absolute;

    top: 60%;
    left: 80%;
    width: 13px;
    height: 7px;

    z-index: 1;
    pointer-events: none;
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
    color: ${({ colors }) => colors.primaryText};
    background: ${({ colors }) => colors.background};
    border-color: ${({ colors }) => colors.icons};
    border-radius: 0;
  }

  .reactSelect__placeholder {
    font-size: 10px;
    color: ${({ colors }) => colors.primaryText};
  }

  .reactSelect__input-container {
    width: 100px;
  }
  .reactSelect__single-value {
    width: 100%;
  }
`;

export default SelectDateStyled;
