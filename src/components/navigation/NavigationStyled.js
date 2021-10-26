import styled from "styled-components";

const NavigationStyled = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  height: 33px;
  border-right: 2px solid ${({ colors }) => colors.secondaryText};

  .navigationList {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }
  .navigationLink {
    display: flex;
  }
  .navigationItem {
    margin-right: 6px;
  }

  .wrapper {
    width: 33px;
    height: 33px;
  }
  .activeNavigationLink {
    background-color: ${({ colors }) => colors.iconsActive};
    border-radius: 50px;
  }
  .navHomeSvg {
    width: 20px;
    height: 18px;
  }
  .navLibrarySvg {
    width: 22px;
    height: 18px;
  }
  .iconWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 33px;
    height: 33px;
  }
`;

export default NavigationStyled;
