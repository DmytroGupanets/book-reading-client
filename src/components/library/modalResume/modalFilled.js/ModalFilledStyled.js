import styled from "styled-components";

export const ModalFilledStyled = styled.div`
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

  .resumeModalSvg {
    height: 17px;
    width: 17px;
  }

  .yourResumeText {
    margin-top: 20px;
    margin-bottom: 40px;

    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.17;

    color: #898f9f;
  }

  .filledButtonsWrapper {
    display: flex;
    justify-content: center;
  }

  .filledResumeModalBackBtn {
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

  .FilledResumeModalEditBtn {
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
