import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { resize } from "../../../hooks";
import { getUserName } from "../../../redux/auth/authSelectors";
import { ThemeContext } from "../../App";

import UserMenuStyled from "./UserMenuStyled";

const UserMenu = () => {
  const { theme } = useContext(ThemeContext);
  const userName = useSelector(getUserName);
  const { width } = resize();

  return (
    <UserMenuStyled width={width} colors={theme}>
      <span className="userNameFirstLet">{userName?.[0]?.toUpperCase()}</span>
      <span className="userName">{userName}</span>
    </UserMenuStyled>
  );
};

export default UserMenu;
