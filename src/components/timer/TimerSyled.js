import styled from "styled-components";

export const TimerStyled = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  padding-top: 50px;

  @media (max-width: 767px) {
    flex-wrap: wrap;
  }

  @media (min-width: 768px) and (max-width: 1280px) {
    padding-top: 65px;
  }

  @media (min-width: 1280px) {
    margin-bottom: 40px;
  }
`;
