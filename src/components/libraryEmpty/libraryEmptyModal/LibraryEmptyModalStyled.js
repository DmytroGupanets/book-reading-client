import styled from "styled-components";

export const LibraryEmptyModalStyled = styled.form`
  position: fixed;
  top: 60px;
  left: 0;
  z-index: 60;

  display: flex;
  justify-content: center;
  background-color: ${({ colors }) => colors.primaryBg};
  height: 100vh;
  width: 100vw;

  .modalClose {
    border: none;
    background-color: inherit;

    cursor: pointer;
  }

  .closeAddBookModalSvg {
    width: 24px;
    height: 12px;
  }

  .bookContainerModal {
    margin-top: 25px;
  }

  .aboutBookModal {
    display: block;
    font-weight: 500;
    font-size: 14px;
    line-height: 2.7;
    color: ${({ colors }) => colors.secondaryText};
  }
  .aboutBookInputModal {
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

  .addButtonModal {
    display: block;
    width: 171px;
    height: 42px;
    font-weight: 500;
    font-size: 14px;
    line-height: 2.7;
    margin: 0 auto;
    border: 1px solid ${({ colors }) => colors.primaryText};
    background-color: ${({ colors }) => colors.primaryBg};
    cursor: pointer;

    &:hover,
    :focus {
      background-color: ${({ colors }) => colors.trainingLabel};
    }
  }

  .aboutBookContainerModal {
    position: relative;
    margin-bottom: 35px;
  }

  .aboutBookInputModal {
    border: 1px solid ${({ colors }) => colors.icons};
  }

  .aboutBookInput-titleModal {
    border: 1px solid ${({ colors }) => colors.icons};
  }

  .aboutBookInput-authorModal {
    border: 1px solid ${({ colors }) => colors.icons};
  }

  .aboutBookInput-yearModal {
    border: 1px solid ${({ colors }) => colors.icons};
  }

  .warningText {
    position: absolute;
    bottom: -15px;
    left: 0px;

    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 10px;
    line-height: 1.1;
    color: #eb5757;
  }
`;
