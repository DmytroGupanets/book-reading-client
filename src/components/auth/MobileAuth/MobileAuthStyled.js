import styled from "styled-components";

export const MobileAuthStyled = styled.div`
  padding: 30px 25px 58px 25px;
  font-style: normal;
  letter-spacing: 0;
  color: ${({ colors }) => colors.primaryText};

  .title {
    margin-bottom: 20px;
    text-align: center;
    font-family: "Abril Fatface", sans-serif;
    font-weight: normal;
    font-size: 34px;
    line-height: 1.12;
  }

  .listTitle {
    margin-bottom: 14px;
    font-family: "Montserrat", sans-serif;
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
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.3;
    color: ${({ colors }) => colors.secondaryText};
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

  .loginLink,
  .registerLink {
    text-align: center;
    width: calc(100% / 2 - 8px);
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 38px;
    cursor: pointer;
  }

  .loginLink {
    color: ${({ colors }) => colors.primaryText};
    border: 1px solid #000000;
  }

  .registerLink {
    color: ${({ colors }) => colors.secondaryBg};
    background-color: ${({ colors }) => colors.accent};
    border: none;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  }

  .authLink:hover,
  .authLink:focus {
  }
`;
