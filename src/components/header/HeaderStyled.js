import styled from "styled-components";

const HeaderStyled = styled.header`
  background-color: ${({ colors }) => colors.headerBg};
  padding-left: 25px;
  padding-right: 25px;
  width: 100%;

  height: 60px;
  position: relative;
  display: flex;
  align-items: center;
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);

  justify-content: ${({ isAuth }) => (isAuth ? "space-between" : "center")};

  .logoWrapper {
    display: flex;
    align-items: center;
  }
  .mobileWrapper {
    height: 33px;
    display: flex;
    align-items: flex-end;
    justify-content: start;
  }
  .desktopWrapper {
    height: 33px;
    display: flex;
    align-items: flex-end;
    justify-content: start;
  }
  .logOut {
    margin-left: 14px;
  }
`;

export default HeaderStyled;
