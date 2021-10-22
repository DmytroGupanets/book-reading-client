import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import NavigationStyled from "./NavigationStyled";
import sprite from "../../images/sprite.svg";
import { ThemeContext } from "../App";
import { getAllBooks } from "../../redux/books/booksSelectors";
import { useSelector } from "react-redux";

const Navigation = () => {
  const { theme } = useContext(ThemeContext);
  const books = useSelector(getAllBooks);

  const isAnyBooks = books.length > 0;

  return (
    <NavigationStyled colors={theme}>
      <ul className="navigationList">
        {isAnyBooks && (
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
        )}
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
