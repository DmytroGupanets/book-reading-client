import React from "react";

import userInfo from "./userInfo.json";
import UserMenuStyled from "./UserMenuStyled";

const UserMenu = () => {
  const userName = userInfo.name;

  return (
    <UserMenuStyled>
      <span className="userNameFirstLet">{userName[0].toUpperCase()}</span>
      <span className="userName">{userName}</span>
    </UserMenuStyled>
  );
};

export default UserMenu;
