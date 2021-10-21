import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { getUserName } from "../../../redux/auth/authSelectors";
import { ThemeContext } from "../../App";

import UserMenuStyled from "./UserMenuStyled";

const UserMenu = () => {
  const { theme } = useContext(ThemeContext);
  const userName = useSelector(getUserName);

  return (
    <UserMenuStyled colors={theme}>
      <span className="userNameFirstLet">{userName?.[0]?.toUpperCase()}</span>
      <span className="userName">{userName}</span>
    </UserMenuStyled>
  );
};

export default UserMenu;
