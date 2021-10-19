import styled from "styled-components";

export const TimerStyled = styled.div`
  display: flex;
  margin-bottom: 30px;
  padding-top: 50px;
  justify-content: center;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  @media (min-width: 768px) and (max-width: 1280px) {
    padding-top: 65px;
  }

  @media (min-width: 1280px) {
    margin-bottom: 40px;
  }
`;
