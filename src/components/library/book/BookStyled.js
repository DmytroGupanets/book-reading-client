import styled from "styled-components";

export const BookStyled = styled.div`
  display: flex;
  align-items: center;

  background-color: #ffffff;
  padding: 20px;
  margin-bottom: 10px;

  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.21;

  @media screen and (min-width: 1280px) {
    line-height: 2.71;
  }

  text-align: right;

  color: #242a37;

  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);

  .iconSvg {
    height: 17px;
    width: 22px;
  }

  .bookName {
    margin-left: 18px;
    margin-right: 10px;

    @media screen and (min-width: 1280px) {
      margin-right: 0;
    }

    flex-basis: ${({ isCompleted }) => (isCompleted ? "30%" : "44%")};

    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.21;
    text-align: start;

    @media screen and (min-width: 1280px) {
      line-height: 2.71;
      flex-basis: ${({ isCompleted }) => (isCompleted ? "30%" : "49%")};
    }
  }

  .bookAuthor {
    flex-basis: ${({ isCompleted }) => (isCompleted ? "18%" : "28%")};

    @media screen and (min-width: 1280px) {
      line-height: 2.71;
      flex-basis: ${({ isCompleted }) => (isCompleted ? "18%" : "29%")};
    }

    text-align: start;
  }

  .bookYear {
    flex-basis: 9%;

    @media screen and (min-width: 1280px) {
      flex-basis: 3%;
    }

    text-align: end;
  }

  .bookPages {
    flex-basis: 9%;

    text-align: end;
  }

  .resume {
    display: flex;
    flex-basis: 40%;
    justify-content: center;
  }

  .bookResume {
  }

  .resumeButton {
    margin-left: 30px;
  }
`;
