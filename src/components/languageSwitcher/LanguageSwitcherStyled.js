import styled from "styled-components";
export const LanguageSwitcherStyled = styled.div`
  position: ${({ isAuth }) => (isAuth ? "static" : "absolute")};
  left: 25px;
  top: 13px;
  .langBtn {
    margin-left: 5px;
    margin-right: 5px;
    padding: 8px;
    font-size: 13px;
    font-weight: bold;
    line-height: 17px;
    text-align: center;
    color: ${({ colors }) => colors.primaryText};
    background-color: ${({ colors }) => colors.iconsActive};
    border: none;
    border-radius: 50%;
    cursor: pointer;
  }
  .langBtn:hover,
  .langBtn:focus {
    background-color: ${({ colors }) => colors.trainingLabel};
  }
`;
