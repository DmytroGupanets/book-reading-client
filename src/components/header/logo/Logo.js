import React, { useContext } from "react";
import sprite from "../../../images/sprite.svg";
import { ThemeContext } from "../../App";
import LogoStyled from "./LogoStyled";

const Logo = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <LogoStyled colors={theme}>
      <svg className="logoSvg">
        <use href={sprite + "#icon-logo"} />
      </svg>
    </LogoStyled>
  );
};

export default Logo;
