import styled from "styled-components";

export const RegistrationStyled = styled.div`
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
    margin-bottom: 20px;
  }

  .listItem {
    font-family: Montserrat, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 0.9;
    color: #898f9f;
  }

  .arrowIcon {
    width: 5px;
    height: 10px;
    margin-right: 12px;
  }

  @media screen and (min-width: 768px) {
    padding: 60px 60px 60px 100px;

    .title {
      margin-bottom: 40px;
    }

    .listTitle {
      margin-bottom: 4px;
    }

    .listItem {
      line-height: 2.71;
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
