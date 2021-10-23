import styled from "styled-components";

export const ContainerStyled = styled.div`
  padding-left: 25px;
  padding-right: 25px;
  margin: 0 auto;
  max-width: 320px;

  @media screen and (min-width: 768px) {
    max-width: 728px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1252px;
  }
`;
