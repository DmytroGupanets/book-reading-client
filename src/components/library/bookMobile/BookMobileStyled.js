import styled from "styled-components";

export const BookMobileStyled = styled.div`
  display: flex;
  background-color: ${({ colors }) => colors.secondaryBg};
  padding: 20px 10px 20px 20px;
  margin-bottom: 15px;

  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);

  .iconWrapper {
    padding-top: 2px;
  }

  .iconSvg {
    height: 17px;
    width: 22px;
  }

  .bookInfoWrapper {
    margin-left: 12px;

    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 12px;
    line-height: 1.25;
    color: ${({ colors }) => colors.primaryText};
  }

  .bookInfo {
    display: flex;
    flex-wrap: wrap;
  }

  .bookName {
    max-width: 170px;
    font-weight: 500;
    font-size: 12px;
    margin-bottom: 15px;
  }

  .bookFieldName {
    flex-basis: 34%;
    margin-bottom: 15px;

    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 12px;
    line-height: 1.25;

    color: ${({ colors }) => colors.secondaryText};
  }

  .bookFieldValue {
    flex-basis: 66%;
    text-align: left;
    margin-bottom: 15px;

    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 12px;
    line-height: 1.25;
    color: ${({ colors }) => colors.primaryText};
  }

  .resumeButtonMobile {
    margin-left: 20px;
    padding: 0 32px;
    background: ${({ colors }) => colors.buttonPrimary};

    border: none;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 2.71;
    color: ${({ colors }) => colors.secondaryBg};
    cursor: pointer;

    &:hover,
    &:focus {
      color: ${({ colors }) => colors.primaryText};
    }
  }
`;
