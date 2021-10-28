import styled from "styled-components";

export const ModalFilledStyled = styled.div`
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

  .resumeModalSvg {
    height: 17px;
    width: 17px;
  }

  .textBox {
    width: 210px;

    margin-top: 20px;
    margin-bottom: 40px;

    @media screen and (min-width: 768px) {
      width: 510px;
    }
  }

  .yourResumeText {
    display: block;
    max-height: 300px;
    padding-top: 5px;
    padding-bottom: 5px;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.17;

    color: ${({ colors }) => colors.secondaryText};

    word-wrap: break-word;
    overflow: auto;
  }

  .filledButtonsWrapper {
    display: flex;
    justify-content: center;
  }

  .filledResumeModalBackBtn {
    width: 140px;

    background-color: white;
    border: 1px solid ${({ colors }) => colors.primaryText};

    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 2.71;
    text-align: center;

    color: ${({ colors }) => colors.inputText};
    cursor: pointer;

    &:hover,
    &:focus {
      background-color: ${({ colors }) => colors.icons};
    }
  }

  .FilledResumeModalEditBtn {
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
