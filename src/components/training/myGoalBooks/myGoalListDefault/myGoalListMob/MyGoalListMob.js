import MyGoalListDefMobStyled from "./MyGoalListMobStyled";
import sprite from "../../../../../images/Training/sprite.svg";
import { useContext } from "react";
import { ThemeContext } from "../../../../App";

const MyGoalListDefMob = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <MyGoalListDefMobStyled colors={theme}>
      <div className="goalListMob_container">
        <svg className="goalListMob_SvgBook">
          <use href={sprite + "#icon-Book"}></use>
        </svg>
        <span className="goalListMob_points">...</span>
        <div className="goalListMob_List__container">
          <ul className="goalListMob_List__ItemListInfo1">
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
          <ul className="goalListMob_List__ItemListInfo2">
            <li className="goalListMob_List_ItemListInfo2__Inner">
              <p>...</p>
            </li>
            <li className="goalListMob_List_ItemListInfo2__Inner">
              <p>...</p>
            </li>
            <li className="goalListMob_List_ItemListInfo2__Inner">
              <p>...</p>
            </li>
          </ul>
        </div>
      </div>
    </MyGoalListDefMobStyled>
  );
};

export default MyGoalListDefMob;
