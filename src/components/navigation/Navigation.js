import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import NavigationStyled from "./NavigationStyled";
import sprite from "../../images/sprite.svg";
import { ThemeContext } from "../App";

const Navigation = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <NavigationStyled colors={theme}>
      <ul className="navigationList">
        <li className="navigationItem">
          <NavLink
            className="navigationLink"
            activeClassName="activeNavigationLink"
            to="/training"
            exact
          >
            <svg className="navHomeSvg">
              <use href={sprite + "#icon-home"} />
            </svg>
          </NavLink>
        </li>
        <li className="navigationItem">
          <NavLink
            className="navigationLink"
            activeClassName="activeNavigationLink"
            to="/library"
          >
            <svg className="navLibrarySvg">
              <use href={sprite + "#icon-library"} />
            </svg>
          </NavLink>
        </li>
      </ul>
    </NavigationStyled>
  );
};

export default Navigation;
