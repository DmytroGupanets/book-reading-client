import Logo from "./logo/Logo";
import LogOut from "../navigation/logOut/LogOut";
import Navigation from "../navigation/Navigation";
import UserMenu from "../navigation/userMenu/UserMenu";
import LanguageSwitcher from "../languageSwitcher/LanguageSwitcher";
import HeaderStyled from "./HeaderStyled";
// import ThemeSwitcher from "../themeSwitcher/ThemeSwitcher";
import { useSelector } from "react-redux";
import { getAuthenticated } from "../../redux/auth/authSelectors";
import { useContext } from "react";
import { ThemeContext } from "../App";

const Header = () => {
  const { theme } = useContext(ThemeContext);
  const isAuth = useSelector(getAuthenticated);

  return (
    <HeaderStyled colors={theme}>
      <Logo />
      <LanguageSwitcher />
      {isAuth && (
        <>
          <div className="headerWrapper">
            <Navigation />
            <UserMenu />
          </div>
          <LogOut />
        </>
      )}
      {/* <ThemeSwitcher /> */}
    </HeaderStyled>
  );
};

export default Header;
