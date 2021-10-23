import styled from "styled-components";

export const AddBookMobileIconStyled = styled.div`
  position: absolute;
  bottom: -90px;
  left: 50%;

  transform: translateX(-50%);

  .addBookBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ colors }) => colors.accent};
    border-radius: 50%;
    border: none;
    width: 52px;
    height: 52px;

    cursor: pointer;

    &:hover,
    :focus {
      background-color: ${({ colors }) => colors.accentActive};
    }
  }

  .addBookModalSvg {
    width: 16px;
    height: 16px;
  }
`;
