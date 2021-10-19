import React from "react";
import { useSelector } from "react-redux";
import { getUserName } from "../../../redux/auth/authSelectors";

import UserMenuStyled from "./UserMenuStyled";

const UserMenu = () => {
  const userName = useSelector(getUserName);

  return (
    <UserMenuStyled>
      <span className="userNameFirstLet">{userName?.[0]?.toUpperCase()}</span>
      <span className="userName">{userName}</span>
    </UserMenuStyled>
  );
};

export default UserMenu;
