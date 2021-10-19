import MyGoalListItemNormalStyled from "./MyGoalListItemNormalStyled";
import sprite from "../../../../../../images/Training/sprite.svg";

const MyGoalListItemNormal = ({ item }) => {
  const { bookName, author, year, pages } = item;
  return (
    <MyGoalListItemNormalStyled>
      <svg className="books_List__BookSvg">
        <use href={sprite + "#icon-Book"}></use>
      </svg>
      <ul className="books_ListFull">
        <li className="books_ListFull__Item">{bookName}</li>
        <li className="books_ListFull__Item">{author}</li>
        <li className="books_ListFull__Item">{year}</li>
        <li className="books_ListFull__Item">{pages}</li>
      </ul>
      <svg className="books_List__DeleteSvg">
        <use href={sprite + "#icon-delete"}></use>
      </svg>
    </MyGoalListItemNormalStyled>
  );
};

export default MyGoalListItemNormal;
