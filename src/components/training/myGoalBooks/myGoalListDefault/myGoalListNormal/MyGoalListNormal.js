import MyGoalListNormalStyled from "./MyGoalListNormalStyled";
import sprite from "../../../../../images/Training/sprite.svg";
import { createContext } from "react";
import { ThemeContext } from "../../../../App";

const MyGoalListNormal = () => {
  const { theme } = createContext(ThemeContext);

  return (
    <MyGoalListNormalStyled colors={theme}>
      <ul className="goalListNorm_List">
        <li className="goalListNorm_List__Item">Назва книги</li>
        <li className="goalListNorm_List__Item">Автор</li>
        <li className="goalListNorm_List__Item">Рік</li>
        <li className="goalListNorm_List__Item">Стор.</li>
      </ul>
      <div className="goalListNorm_EmptyContainer">
        <svg className="goalListNorm_Svg">
          <use href={sprite + "#icon-Book"}></use>
        </svg>
        <p>...</p>
      </div>
    </MyGoalListNormalStyled>
  );
};

export default MyGoalListNormal;
