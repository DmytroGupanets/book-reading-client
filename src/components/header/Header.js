import Logo from "./logo/Logo";
import LogOut from "../navigation/logOut/LogOut";
import Navigation from "../navigation/Navigation";
import UserMenu from "../navigation/userMenu/UserMenu";
import HeaderStyled from "./HeaderStyled";

const Header = () => {
  const isAuth = true;
  return (
    <HeaderStyled>
      <Logo />
      {isAuth && (
        <>
          <div className="headerWrapper">
            <Navigation />
            <UserMenu />
          </div>
          <LogOut />
        </>
      )}
    </HeaderStyled>
  );
};

export default Header;