import React from "react";
import { Switch } from "react-router";
import { mainRoutes } from "../../routes/mainRoutes";
import PrivatRoutes from "../../routes/privatRoutes";
import PublicRoutes from "../../routes/publicRoutes";
import { MainStyled } from "./MainStyled";

const Main = () => {
  const isAuth = true;
  return (
    <MainStyled>
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
