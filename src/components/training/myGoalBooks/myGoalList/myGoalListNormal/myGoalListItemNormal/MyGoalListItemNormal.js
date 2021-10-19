import MyGoalListItemNormalStyled from "./MyGoalListItemNormalStyled";
import sprite from "../../../../../../images/Training/sprite.svg";

const MyGoalListItemNormal = ({ item }) => {
  const { bookName, author, year, pages } = item;
  return (
    <MyGoalListItemNormalStyled>
      <svg className="myGoalListNorm_Item__BookSvg">
        <use href={sprite + "#icon-Book"}></use>
      </svg>
      <ul className="myGoalListNorm_Item__ListFull">
        <li className="myGoalListNorm_Item_ListFull_Item">{bookName}</li>
        <li className="myGoalListNorm_Item_ListFull_Item">{author}</li>
        <li className="myGoalListNorm_Item_ListFull_Item">{year}</li>
        <li className="myGoalListNorm_Item_ListFull_Item">{pages}</li>
      </ul>
      <button className="myGoalListNorm_Item__ButtonDelete">
        <svg className="myGoalListNorm_Item__DeleteSvg ">
          <use href={sprite + "#icon-delete"}></use>
        </svg>
      </button>
    </MyGoalListItemNormalStyled>
  );
};

export default MyGoalListItemNormal;
