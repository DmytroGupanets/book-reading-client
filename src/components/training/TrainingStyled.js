import styled from "styled-components";

const TargetStyled = styled.div`
  padding: 30px 0 53px 0;
  text-align: center;

  .startTrainingBtn {
    margin: 37px 0 42px 0;
    width: 171px;
    height: 42px;
    font-weight: 500;
    font-size: 14px;
    line-height: 2.71;
    text-align: center;
    color: #ffffff;
    background: #ff6b08;
    border: none;
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
