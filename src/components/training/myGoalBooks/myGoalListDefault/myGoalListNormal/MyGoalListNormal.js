import MyGoalListNormalStyled from "./MyGoalListNormalStyled";
import sprite from "../../../../../images/Training/sprite.svg";

const MyGoalListNormal = () => {
  return (
    <MyGoalListNormalStyled>
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
