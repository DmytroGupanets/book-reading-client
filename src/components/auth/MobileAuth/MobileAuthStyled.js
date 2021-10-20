import styled from "styled-components";

export const MobileAuthStyled = styled.div`
  padding: 30px 25px 58px 25px;
  font-style: normal;
  letter-spacing: 0;
  color: #242a37;

  .title {
    margin-bottom: 20px;
    text-align: center;
    font-family: Abril Fatface, sans-serif;
    font-weight: normal;
    font-size: 34px;
    line-height: 1.12;
  }

  .listTitle {
    margin-bottom: 14px;
    font-family: Montserrat, sans-serif;
    font-weight: 500;
    font-size: 20px;
    line-height: 1.9;
  }

  .list {
    margin-bottom: 30px;
  }

  .listItem {
    position: relative;
    margin-bottom: 14px;
    padding-left: 17px;
    font-family: Montserrat, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.3;
    color: #898f9f;
  }

  .arrowIcon {
    position: absolute;
    left: 0;
    top: 3px;
    width: 5px;
    height: 10px;
  }

  .linkContainer {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
  }

  .authLink {
    text-align: center;
    width: calc(100% / 2 - 8px);
    font-family: Montserrat, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 38px;
    color: #242a37;
    border: 1px solid #000000;
    cursor: pointer;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      border 250ms cubic-bezier(0.4, 0, 0.2, 1),
      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .authLink:hover,
  .authLink:focus {
    color: #ffffff;
    background-color: #ff6b08;
    border: none;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  }
`;
