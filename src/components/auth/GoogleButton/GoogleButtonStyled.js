import styled from "styled-components";

export const GoogleButtonStyled = styled.div`
  display: flex;
  justify-content: center;
  .googleButton {
    position: relative;
    padding: 11px 14px;
    width: 150px;
    height: 40px;
    color: #707375;
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    text-align: center;
    background-color: ${({ colors }) => colors.iconActive};
    box-shadow: 0px 2px 2px rgba(9, 30, 63, 0.15);
    border: none;
    cursor: pointer;
    transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
      box-shadow: 0px 2px 2px rgba(240, 110, 4, 0.15);
    }
  }

  .googleIcon {
    position: absolute;
    top: 11px;
    left: 14px;
  }
`;
