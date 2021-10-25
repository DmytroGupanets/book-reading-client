import styled from "styled-components";

const BtnModalStyled = styled.div`
  .btnModal {
    width: 100px;
    height: 40px;
    background-color: ${({ colors }) => colors.accent};
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 38px;
    text-align: center;
    color: ${({ colors }) => colors.secondaryBg};
    border: none;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    transition: transform 250ms linear;

    &:hover,
    :focus {
      background-color: ${({ colors }) => colors.accentActive};
    }

    @media screen and (min-width: 768px) {
      width: 130px;
    }
  }
`;

export default BtnModalStyled;
