import styled from "styled-components";

export const LibraryEmptyModalStyled = styled.form`
  /* .ModalOverlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(43, 43, 43, 0.15);
    z-index: 100;
  } */

  .ModalOverlay > .Modal {
    max-width: 0;
    max-height: 0;
    width: 100vw;
    height: 100vh;
  }

  display: flex;
  justify-content: center;
  background-color: ${({ colors }) => colors.primaryBg};
  height: 100vh;
  width: 100vw;

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
    .addButton {
      margin: auto;
      margin-left: 30px;
      margin-top: 36px;
    }
  }
`;
