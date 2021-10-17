import Logo from "./logo/Logo";
import LogOut from "../navigation/logOut/LogOut";
import Navigation from "../navigation/Navigation";
import UserMenu from "../navigation/userMenu/UserMenu";
import LanguageSwitcher from "../languageSwitcher/LanguageSwitcher";
import HeaderStyled from "./HeaderStyled";
import ThemeSwitcher from "../themeSwitcher/ThemeSwitcher";

const Header = () => {
  const isAuth = true;
  return (
    <HeaderStyled>
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
      <ThemeSwitcher />
    </HeaderStyled>
  );
};

export default Header;
