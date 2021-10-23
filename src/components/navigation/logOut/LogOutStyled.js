import styled from "styled-components";

const LogOutStyled = styled.div`
  .logOutButton {
    border: none;
    background-color: transparent;
    width: 40px;
    height: 38px;
    font-weight: 300;
    font-size: 14px;
    line-height: 2.71;
    cursor: pointer;

    color: ${({ colors }) => colors.primaryText};
  }
  .logOutWrapper {
    border-bottom: 1px solid #242a37;
  }
`;

export default LogOutStyled;
