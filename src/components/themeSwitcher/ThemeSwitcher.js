import React, { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "../App";
import { ThemeSwitcherStyled } from "./ThemeSwitcherStyled";

const ThemeSwitcher = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <ThemeSwitcherStyled>
      <Switch
        onChange={changeTheme}
        checked={theme.title === "light" ? true : false}
        onColor={theme.colors.on}
        offColor={theme.colors.off}
      />
    </ThemeSwitcherStyled>
  );
};

export default ThemeSwitcher;
