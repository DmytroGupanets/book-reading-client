import styled from "styled-components";
export const LanguageSwitcherStyled = styled.div`
  .langBtn {
    margin-left: 5px;
    margin-right: 5px;
    padding: 8px;
    font-size: 13px;
    font-weight: bold;
    line-height: 17px;
    text-align: center;
    color: ${(props) => props.colors.primaryText};
    background-color: ${(props) => props.colors.langBtn};
    border: none;
    border-radius: 50%;
    cursor: pointer;
  }
  .langBtn:hover,
  .langBtn:focus {
    background-color: ${(props) => props.colors.langBtnActive};
    color: ${(props) => props.colors.secondaryText};
  }
`;
