import styled from "styled-components";

export const RegistrationStyled = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    padding: 60px 60px 60px 100px;
    font-style: normal;
    letter-spacing: 0;
    color: #242a37;

    .title {
      margin-bottom: 40px;
      text-align: center;
      font-family: Abril Fatface, sans-serif;
      font-weight: normal;
      font-size: 34px;
      line-height: 1.12;
    }

    .listTitle {
      margin-bottom: 4px;
      font-family: Montserrat, sans-serif;
      font-weight: 500;
      font-size: 20px;
      line-height: 1.9;
    }

    .listItem {
      font-family: Montserrat, sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 2.71;
      color: #898f9f;
    }

    .list {
      margin-bottom: 20px;
    }

    .arrowIcon {
      width: 5px;
      height: 10px;
      margin-right: 12px;
    }
  }

  @media screen and (min-width: 1280px) {
    padding: 134px 90px;

    .title {
      margin-bottom: 52px;
    }

    .listTitle {
      margin-bottom: 4px;
    }
  }
`;
