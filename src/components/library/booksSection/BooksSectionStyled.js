import styled from "styled-components";

export const BooksSectionStyled = styled.div`
  padding-top: 20px;
  .title {
    margin-bottom: 10px;

    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 19px;
    line-height: 2;

    color: ${({ colors }) => colors.primaryText};
  }
`;
