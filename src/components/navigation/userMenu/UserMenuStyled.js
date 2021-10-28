import styled from "styled-components";

const UserMenuStyled = styled.div`
  align-self: ${({ width }) => (width > 767 ? "center" : "end")};
  margin-left: ${({ width }) => (width > 767 ? "0" : "14px")};
  .userName {
    display: none;
    color: ${({ colors }) => colors.primaryText};
  }
  .userNameFirstLet {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 14px;
    line-height: 2.71;
    /* display: inline-block; */
    width: 33px;
    height: 33px;
    text-align: center;
    background: ${({ colors }) => colors.iconsActive};
    border-radius: 50px;

    color: ${({ colors }) => colors.primaryText};
  }
  @media screen and (min-width: 768px) {
    margin-left: 52px;
    display: flex;
    align-items: center;
    .userName {
      margin-left: 20px;
      display: flex;
    }
  }
`;

export default UserMenuStyled;
