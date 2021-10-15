import React from "react";
import { NavLink } from "react-router-dom";
import NavigationStyled from "./NavigationStyled";
import sprite from "../../images/sprite.svg";

const Navigation = () => {
  return (
    <NavigationStyled>
      <ul className="navigationList">
        <li className="navigationItem">
          <NavLink
            className="navigationLink"
            activeClassName="activeNavigationLink"
            to="/"
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
