import MyGoalListItemMobStyled from "./MyGoalListItemMobStyled";
import sprite from "../../../../../../images/Training/sprite.svg";

const MyGoalListItemMob = ({ item }) => {
  const { bookName, author, year, pages } = item;
  return (
    <MyGoalListItemMobStyled>
      <svg className="myGoalList_SvgBook">
        <use href={sprite + "#icon-Book"}></use>
      </svg>
      <div className="myGoalList_ContainerInfo">
        <h3 className="myGoalList_Item_BookTitle">{bookName}</h3>
        <div className="myGoalList_Item__ListContainer">
          <ul className="myGoalList_Item__ListInfo1">
            <li>
              <p>Автор:</p>
            </li>
            <li>
              <p>Рік:</p>
            </li>
            <li>
              <p>Стор.:</p>
            </li>
          </ul>
          <ul className="myGoalList_Item__ListInfo2">
            <li>{author}</li>
            <li>{year}</li>
            <li>{pages}</li>
          </ul>
        </div>
      </div>
      <svg className="myGoalList_SvgDelete">
        <use href={sprite + "#icon-delete"}></use>
      </svg>
    </MyGoalListItemMobStyled>
  );
};

export default MyGoalListItemMob;
