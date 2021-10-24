import styled from "styled-components";

const MyTrainingStyled = styled.div`
  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 25px;
  }

  .trainingTitle {
    font-weight: 600;
    font-size: 20px;
    line-height: 1.9;
    padding: 11px 47px;
    text-align: center;

    color: ${({ colors }) => colors.secondaryBg};
    background: #b1b5c2;
    box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
  }
`;

export default MyTrainingStyled;
