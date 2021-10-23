import styled from "styled-components";

export const LogOutModalStyled = styled.div`
  padding: 50px 17px;
  background-color: ${({ colors }) => colors.secondaryBg};
  max-width: 270px;

  @media screen and (min-width: 768px) {
    max-width: 390px;
    padding: 50px;
  }

  .attentionText {
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.37;

    text-align: center;
  }

  .logOutButtonsWrapper {
    display: flex;
    justify-content: center;
    margin-top: 20px;

    @media screen and (min-width: 768px) {
      margin-top: 25px;
    }
  }

  .logOutCancelBtn {
    width: 140px;

    background-color: white;
    border: 1px solid ${({ colors }) => colors.primaryText};

    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 2.71;
    text-align: center;

    color: ${({ colors }) => colors.primaryText};
    cursor: pointer;

    &:hover,
    &:focus {
      background-color: ${({ colors }) => colors.icons};
    }
  }

  .logOutConfirmBtn {
    width: 140px;

    background-color: ${({ colors }) => colors.accent};
    border: none;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    margin-left: 30px;

    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 2.71;
    text-align: center;

    color: ${({ colors }) => colors.secondaryBg};
    cursor: pointer;

    &:hover,
    &:focus {
      background-color: ${({ colors }) => colors.accentActive};
    }
  }
`;
