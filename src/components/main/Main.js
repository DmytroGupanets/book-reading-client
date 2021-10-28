import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Switch, useLocation } from "react-router";
import { getAuthenticated } from "../../redux/auth/authSelectors";
import { mainRoutes } from "../../routes/mainRoutes";
import PrivatRoutes from "../../routes/privatRoutes";
import PublicRoutes from "../../routes/publicRoutes";
import { ThemeContext } from "../App";
import { MainStyled } from "./MainStyled";

const Main = () => {
  const location = useLocation();
  let { theme } = useContext(ThemeContext);
  const isAuth = useSelector(getAuthenticated);

  if (
    location.pathname === "/auth" ||
    location.pathname === "/auth/login" ||
    location.pathname === "/auth/register"
  ) {
    theme = "light";
  }

  return (
    <MainStyled colors={theme}>
      <Switch>
        {mainRoutes.map(({ path, exact, component, isPrivat, restricted }) =>
          isPrivat ? (
            <PrivatRoutes
              isAuth={isAuth}
              path={path}
              exact={exact}
              component={component}
              key={path}
            />
          ) : (
            <PublicRoutes
              isAuth={isAuth}
              path={path}
              exact={exact}
              component={component}
              restricted={restricted}
              key={path}
            />
          )
        )}
      </Switch>
    </MainStyled>
  );
};

export default Main;
