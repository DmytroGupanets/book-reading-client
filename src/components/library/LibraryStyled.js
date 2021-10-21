import styled from "styled-components";

export const LibraryStyled = styled.div`
  .trainingLink {
    display: block;

    background-color: ${({ colors }) => colors.accent};

    margin: 20px auto;
    text-align: center;
    width: 200px;
    height: 40px;

    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 2.37;
    color: ${({ colors }) => colors.secondaryBg};
  }
`;
