import styled from "styled-components";

export const RatingStarsStyled = styled.div`
  display: flex;

  .ratingSvg {
    height: 17px;
    width: 17px;

    &:not(:first-child) {
      margin-left: 4px;
    }

    @media screen and (min-width: 768px) {
      &:not(:first-child) {
        margin-left: 0px;
      }
    }

    @media screen and (min-width: 1280px) {
      height: 17px;
      width: 17px;
      &:not(:first-child) {
        margin-left: 2px;
      }
    }
  }
`;
