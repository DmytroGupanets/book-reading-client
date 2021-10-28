import styled from "styled-components";

export const BooksLabelStyled = styled.div`
  .title {
    margin-top: 20px;
    margin-bottom: 10px;

    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 19px;
    line-height: 2;
    color: ${({ colors }) => colors.primaryText};
  }

  .labelWrapper {
    display: flex;
    align-content: space-between;

    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 2.71;

    color: ${({ colors }) => colors.secondaryText};
  }

  .labelName {
    flex-basis: ${({ isCompleted }) => (isCompleted ? "36%" : "52%")};

    @media screen and (min-width: 1280px) {
      flex-basis: ${({ isCompleted }) => (isCompleted ? "33%" : "52%")};
    }

    text-align: start;
  }

  .labelAuthor {
    flex-basis: ${({ isCompleted }) => (isCompleted ? "16%" : "28%")};

    text-align: start;
  }

  .labelYear {
    flex-basis: 6%;

    @media screen and (min-width: 1280px) {
      flex-basis: 3%;
    }

    text-align: end;
  }

  .labelPages {
    flex-basis: 9%;

    text-align: end;
  }

  .labelRating {
    padding-left: 24px;
    flex-basis: 36%;

    @media screen and (min-width: 1280px) {
      padding-left: 110px;
    }

    text-align: start;
  }
`;
