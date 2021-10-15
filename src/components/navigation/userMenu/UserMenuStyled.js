import styled from "styled-components";

const UserMenuStyled = styled.div`
  margin-left: 14px;
  .userName {
    display: none;
  }
  .userNameFirstLet {
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 14px;
    line-height: 2.71;

    color: #242a37;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    .userName {
      margin-left: 20px;
      display: flex;
    }
  }
`;

export default UserMenuStyled;
