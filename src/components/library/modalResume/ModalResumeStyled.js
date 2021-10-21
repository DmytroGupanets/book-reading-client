import styled from "styled-components";

export const ModalResumeStyled = styled.div`
  text-align: start;
  padding: 30px;
  background-color: ${({ colors }) => colors.secondaryBg};
  max-width: 570px;

  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 2.37;

  color: ${({ colors }) => colors.primaryText};

  @media screen and (max-width: 767px) {
    max-width: 270px;
  }

  .chooseRating {
  }

  .resumeModalSvg {
    height: 17px;
    width: 17px;
  }

  .ResumeTextArea {
    margin-bottom: 25px;
    height: 170px;
    resize: none;
    padding: 10px;

    border: 1px solid ${({ colors }) => colors.icons};

    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.37;

    color: ${({ colors }) => colors.secondaryText};

    @media screen and (min-width: 768px) {
      width: 510px;
    }
  }

  .buttonsWrapper {
    display: flex;
    justify-content: center;
  }

  .resumeModalBackBtn {
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

  .resumeModalSubmitBtn {
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
      color: ${({ colors }) => colors.primaryText};
    }
  }
`;
