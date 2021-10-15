import styled from "styled-components";

const HeaderStyled = styled.header`
  padding-left: 25px;
  padding-right: 25px;
  width: 100%;

  height: 60px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  :after {
    position: absolute;
    display: block;
    content: "";
    bottom: 0;
    left: 0;
    right: 0;
    border-bottom: 2px solid #898f9f;
  }

  .headerWrapper {
    margin-left: 66px;
    display: flex;
    align-items: center;
  }
  @media screen and (min-width: 768px) {
    .headerWrapper {
      margin-left: 256px;
      flex-direction: row-reverse;
    }
  }

  @media screen and (min-width: 1280px) {
    .headerWrapper {
    }
  }
`;

export default HeaderStyled;
