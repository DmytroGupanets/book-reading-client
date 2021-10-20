import MyGoalListItemMobStyled from "./MyGoalListItemMobStyled";
import sprite from "../../../../../../images/Training/sprite.svg";

const MyGoalListItemMob = ({ item }) => {
  const { name, author, year, pages } = item;
  return (
    <MyGoalListItemMobStyled>
      <svg className="myGoalListMob_SvgBook">
        <use href={sprite + "#icon-Book"}></use>
      </svg>
      <div className="myGoalListMob_ContainerInfo">
        <h3 className="myGoalListMob_BookTitle">{name}</h3>
        <div className="myGoalListMob_ListContainer">
          <ul className="myGoalListMob_ListInfo1">
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
          <ul className="myGoalListMob_ListInfo2">
            <li>{author}</li>
            <li>{year}</li>
            <li>{pages}</li>
          </ul>
        </div>
      </div>
      <button className="myGoalListMob_ButtonDelete">
        <svg className="myGoalListMob_SvgDelete">
          <use href={sprite + "#icon-delete"}></use>
        </svg>
      </button>
    </MyGoalListItemMobStyled>
  );
};

export default MyGoalListItemMob;
