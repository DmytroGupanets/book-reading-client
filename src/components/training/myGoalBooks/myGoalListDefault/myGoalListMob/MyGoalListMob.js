import MyGoalListDefMobStyled from "./MyGoalListMobStyled";
import sprite from "../../../../../images/Training/sprite.svg";

const MyGoalListDefMob = () => {
  return (
    <MyGoalListDefMobStyled>
      <div className="container">
        <svg className="myGoalList_SvgBook">
          <use href={sprite + "#icon-Book"}></use>
        </svg>
        <span className="myGoalList_points">...</span>
        <div className="list_container">
          <ul className="myGoalList_Item_ListInfo1">
            <li>
              <p>Автор: </p>
            </li>
            <li>
              <p>Рік:</p>
            </li>
            <li>
              <p>Стор.:</p>
            </li>
          </ul>
          <ul className="myGoalList_Item_ListInfo2">
            <li className="inner_Item">
              <p>...</p>
            </li>
            <li className="inner_Item">
              <p>...</p>
            </li>
            <li className="inner_Item">
              <p>...</p>
            </li>
          </ul>
        </div>
      </div>
    </MyGoalListDefMobStyled>
  );
};

export default MyGoalListDefMob;
