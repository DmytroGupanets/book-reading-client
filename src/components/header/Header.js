import Logo from "./logo/Logo";
import LogOut from "../navigation/logOut/LogOut";
import Navigation from "../navigation/Navigation";
import UserMenu from "../navigation/userMenu/UserMenu";
import LanguageSwitcher from "../languageSwitcher/LanguageSwitcher";
import HeaderStyled from "./HeaderStyled";
import ThemeSwitcher from "../themeSwitcher/ThemeSwitcher";
import { useSelector } from "react-redux";
import { getAuthenticated } from "../../redux/auth/authSelectors";
import { useContext } from "react";
import { ThemeContext } from "../App";
import { resize } from "../../hooks";
import { useLocation } from "react-router";

const Header = () => {
  const location = useLocation();
  let { theme } = useContext(ThemeContext);

  if (
    location.pathname === "/auth" ||
    location.pathname === "/auth/login" ||
    location.pathname === "/auth/register"
  ) {
    theme = "light";
  }

  const isAuth = useSelector(getAuthenticated);
  const { width } = resize();

  return (
    <HeaderStyled
      className="header"
      width={width}
      isAuth={isAuth}
      colors={theme}
    >
      <div className="logoWrapper">
        <Logo />
        <LanguageSwitcher />
      </div>
      {isAuth && (
        <>
          {width > 767 ? (
            <>
              <UserMenu />
              <div className="desktopWrapper">
                <Navigation />
                <LogOut />
              </div>
            </>
          ) : (
            <>
              <div className="mobileWrapper">
                <Navigation />
                <UserMenu />
                <LogOut />
              </div>
            </>
          )}
        </>
      )}
      {!(
        location.pathname === "/auth" ||
        location.pathname === "/auth/login" ||
        location.pathname === "/auth/register"
      ) && <ThemeSwitcher />}
    </HeaderStyled>
  );
};

export default Header;
