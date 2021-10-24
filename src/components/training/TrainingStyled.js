import styled from "styled-components";

const TargetStyled = styled.div`
  padding: 30px 0 53px 0;
  text-align: center;

  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: space-between;
  }

  .startTrainingBtn {
    margin: 0 0 42px 0;
    width: 171px;
    height: 42px;

    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 2.37;
    text-align: center;

    color: ${({ colors }) => colors.secondaryBg};
    background-color: ${({ colors }) => colors.accent};
    border: none;
    cursor: pointer;

    &:hover,
    :focus {
      background-color: ${({ colors }) => colors.accentActive};
    }
  }

  .addTrainingBuuton {
    cursor: pointer;
    border: none;
    background: transparent;
  }
  .moreTrainingIcon {
    width: 52px;
    height: 52px;
  }
  @media screen and (min-width: 768px) {
    padding: 30px 0 56px 0;
    .startTrainingBtn {
      width: 200px;
      height: 40px;
      font-weight: 600;
      font-size: 16px;
    }
  }

  @media screen and (min-width: 1280px) {
    padding: 50px 0 36px 0;
  } ;
`;

export default TargetStyled;
