import styled from "styled-components";

const NavigationStyled = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  height: 33px;
  border-right: 2px solid #898f9f;

  .navigationList {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }

  .navigationItem {
    margin-right: 14px;
  }

  .wrapper {
    width: 33px;
    height: 33px;
  }
  .activeNavigationLink {
  }
  .navHomeSvg {
    width: 20px;
    height: 18px;
  }
  .navLibrarySvg {
    width: 22px;
    height: 18px;
  }
  @media screen and (min-width: 768px) {
    margin-left: 124px;
  }
`;

export default NavigationStyled;
