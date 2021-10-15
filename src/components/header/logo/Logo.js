import React from "react";
import sprite from "../../../images/sprite.svg";
import LogoStyled from "./LogoStyled";

const Logo = () => {
  return (
    <LogoStyled>
      <svg className="logoSvg">
        <use href={sprite + "#icon-logo"} />
      </svg>
    </LogoStyled>
  );
};

export default Logo;
