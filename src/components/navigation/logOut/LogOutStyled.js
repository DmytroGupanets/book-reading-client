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

    text-decoration-line: underline;

    color: ${({ colors }) => colors.primaryText};
  }
`;

export default LogOutStyled;
