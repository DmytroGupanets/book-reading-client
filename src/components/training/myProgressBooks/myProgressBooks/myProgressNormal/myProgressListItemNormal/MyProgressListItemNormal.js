import MyProgressListItemNormalStyled from "./MyProgressListItemNormalStyled";
import sprite from "../../../../../../images/sprite.svg";
import { ThemeContext } from "../../../../../App";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { getIndexOfReadedBooksInTraining } from "../../../../../../redux/target/targetSelectors";

const MyGoalListItemNormal = ({ item, idx }) => {
  const finishedBook = useSelector(getIndexOfReadedBooksInTraining);
  const { theme } = useContext(ThemeContext);
  const { name, author, year, pages } = item;

  return (
    <MyProgressListItemNormalStyled colors={theme}>
      {finishedBook < idx ? (
        <svg className="myGoalListNorm_Item__CheckBoxSvg">
          <use href={sprite + "#icon-checkboxEmpt"}></use>
        </svg>
      ) : (
        <svg className="myGoalListNorm_Item__CheckBoxSvg">
          <use href={sprite + "#icon-checkbox"}></use>
        </svg>
      )}
      <ul className="myGoalListNorm_Item__ListFull">
        <li className="myGoalListNorm_Item_ListFull_Item">{name}</li>
        <li className="myGoalListNorm_Item_ListFull_Item">{author}</li>
        <li className="myGoalListNorm_Item_ListFull_Item">{year}</li>
        <li className="myGoalListNorm_Item_ListFull_Item">{pages}</li>
      </ul>
    </MyProgressListItemNormalStyled>
  );
};

export default MyGoalListItemNormal;
