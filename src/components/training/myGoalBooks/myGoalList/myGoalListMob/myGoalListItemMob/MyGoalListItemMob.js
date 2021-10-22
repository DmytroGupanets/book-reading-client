import MyGoalListItemMobStyled from "./MyGoalListItemMobStyled";
import sprite from "../../../../../../images/Training/sprite.svg";
import { useContext } from "react";
import { ThemeContext } from "../../../../../App";
import { useTranslation } from "react-i18next";

const MyGoalListItemMob = ({ item, onClickDelete }) => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const { name, author, year, pages, _id } = item;

  return (
    <MyGoalListItemMobStyled colors={theme}>
      <svg className="myGoalListMob_SvgBook">
        <use href={sprite + "#icon-Book"}></use>
      </svg>
      <div className="myGoalListMob_ContainerInfo">
        <h3 className="myGoalListMob_BookTitle">{name}</h3>
        <div className="myGoalListMob_ListContainer">
          <ul className="myGoalListMob_ListInfo1">
            <li>
              <p>{t("Author m")}:</p>
            </li>
            <li>
              <p>{t("Year m")}:</p>
            </li>
            <li>
              <p>{t("Pages")}:</p>
            </li>
          </ul>
          <ul className="myGoalListMob_ListInfo2">
            <li>{author}</li>
            <li>{year}</li>
            <li>{pages}</li>
          </ul>
        </div>
      </div>
      <button
        bookid={_id}
        onClick={onClickDelete}
        className="myGoalListMob_ButtonDelete"
      >
        <svg className="myGoalListMob_SvgDelete">
          <use href={sprite + "#icon-delete"}></use>
        </svg>
      </button>
    </MyGoalListItemMobStyled>
  );
};

export default MyGoalListItemMob;
