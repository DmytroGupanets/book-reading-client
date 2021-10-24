import styled from "styled-components";

const SelectBooksStyled = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .css-b62m3t-container {
    @media screen and (min-width: 768px) {
      width: 482px;
      height: 42px;
    }

    @media screen and (min-width: 1280px) {
      width: 669px;
    }
  }

  .selectBooksButton {
    cursor: pointer;
    width: 172px;
    height: 42px;
    background: #f6f7fb;
    border: 1px solid #242a37;

    margin-top: 36px;

    font-weight: 500;
    font-size: 14px;
    line-height: 2.71;

    color: #000000;

    @media screen and (min-width: 768px) {
      margin-top: 0;
    }
  }
  .selectBooksIconPolygon {
    width: 13px;
    height: 7px;
    position: absolute;
    right: 17px;
    top: 14px;
  }

  .css-1s2u09g-control {
    border: none;
    background: #ffffff;
    box-shadow: inset 0px 1px 2px rgba(29, 29, 27, 0.15);

    @media screen and (min-width: 768px) {
      height: 42px;
    }
  }
  .css-1okebmr-indicatorSeparator {
    display: none;
  }
`;

export default SelectBooksStyled;
