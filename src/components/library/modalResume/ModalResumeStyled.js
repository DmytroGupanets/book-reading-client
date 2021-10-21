import styled from "styled-components";

export const ModalResumeStyled = styled.div`
  text-align: start;
  padding: 30px;
  background-color: white;
  max-width: 570px;

  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 2.37;

  color: #242a37;

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

    border: 1px solid #a6abb9;

    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.37;

    color: #898f9f;

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
    border: 1px solid #242a37;

    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 2.71;
    text-align: center;

    color: #242a37;

    cursor: pointer;

    &:hover,
    &:focus {
      background-color: #b1b5c2;
    }
  }

  .resumeModalSubmitBtn {
    width: 140px;

    background-color: #ff6b08;
    border: none;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    margin-left: 30px;

    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 2.71;
    text-align: center;

    color: #ffffff;

    cursor: pointer;

    &:hover,
    &:focus {
      color: #242a37;
    }
  }
`;
