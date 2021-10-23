import styled from "styled-components";

export const LibraryEmptyStyled = styled.form`
  display: flex;
  justify-content: center;

  .bookContainer {
    margin-top: 52px;
  }

  .aboutBook {
    display: block;
    font-weight: 500;
    font-size: 14px;
    line-height: 2.7;
    color: ${({ colors }) => colors.secondaryText};
  }
  .aboutBookInput {
    display: block;
    outline: none;
    width: 270px;
    height: 42px;
    font-weight: 400;
    font-size: 14px;
    line-height: 2.7;
    color: ${({ colors }) => colors.primaryText};
    background-color: #f6f7fb;
    padding-left: 13px;
    box-shadow: inset 0px 1px 2px rgba(29, 29, 27, 0.15);
    margin-bottom: 10px;
    border: none;

    &:focus {
      background-color: ${({ colors }) => colors.secondaryBg};
    }
  }
  .bookGroup {
    position: relative;
  }
  .inputError {
    right: auto;
    font-size: 10px;
    letter-spacing: 0.04em;

    color: #eb5757;
  }
  .inputErrorTitle {
    position: absolute;
    top: 185px; 
  }
  .inputErrorAuthor {
    position: absolute;
    top: 260px;
  }
  .inputErrorYear {
    position: absolute;
    top: 350px;
  }
  .inputErrorPages {
    position: absolute;
    top: 440px;
  }

  .addButton {
    display: block;
    width: 171px;
    height: 42px;
    font-weight: 500;
    font-size: 14px;
    line-height: 2.7;
    margin: 0 auto;
    border: 1px solid ${({ colors }) => colors.primaryText};
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    .aboutBookContainer {
      display: flex;
      margin-bottom: 40px;
    }
    .aboutBookInput {
      width: 145px;
    }
    .aboutBookInput-title {
      width: 594px;
    }
    .aboutBookInput-author {
      width: 250px;
      margin-right: 27px;
    }
    .aboutBookInput-year {
      margin-right: 27px;
    }
    .inputErrorYear {
      top: 260px;
    }
    .inputErrorPages {
      top: 260px;
    }
  }
  @media screen and (min-width: 1280px) {
    .bookContainer {
      display: inline-flex;
    }
    .aboutBookInput {
      width: 130px;
      margin-right: 15px;
    }
    .aboutBookInput-title {
      width: 346px;
    }
    .aboutBookInput-author {
      width: 250px;
    }
    .inputErrorAuthor {
      top: 185px;
    }
    .inputErrorYear {
      top: 185px;
    
    }
    .inputErrorPages {
      top: 185px;
    }
    .addButton {
      margin: auto;
      margin-left: 30px;
      margin-top: 36px;
    }
  }
`;
