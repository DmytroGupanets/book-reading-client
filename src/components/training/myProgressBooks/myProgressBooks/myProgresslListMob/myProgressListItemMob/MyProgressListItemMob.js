import MyProgresslListItemMobStyled from "./MyProgressListItemMobStyled";
import sprite from "../../../../../../images/sprite.svg";
import { useContext } from "react";
import { ThemeContext } from "../../../../../App";
import { useTranslation } from "react-i18next";
import { getIndexOfReadedBooksInTraining } from "../../../../../../redux/target/targetSelectors";
import { useSelector } from "react-redux";

const MyProgressListItemMob = ({ item, idx }) => {
  const finishedBook = useSelector(getIndexOfReadedBooksInTraining);
  console.log(finishedBook);
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const { name, author, year, pages } = item;

  return (
    <MyProgresslListItemMobStyled colors={theme}>
      {finishedBook < idx ? (
        <svg className="myGoalListMob_CheckBoxSvg">
          <use href={sprite + "#icon-checkboxEmpt"}></use>
        </svg>
      ) : (
        <svg className="myGoalListMob_CheckBoxSvg">
          <use href={sprite + "#icon-checkbox"}></use>
        </svg>
      )}
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
    </MyProgresslListItemMobStyled>
  );
};

export default MyProgressListItemMob;
