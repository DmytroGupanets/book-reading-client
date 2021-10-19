import MyGoalListNormalStyled from "./MyGoalListNormalStyled";
import sprite from "../../../../../images/Training/sprite.svg";

const MyGoalListNormal = () => {
  return (
    <MyGoalListNormalStyled>
      <ul className="goal_List">
        <li className="goal_item">Назва книги</li>
        <li className="goal_item">Автор</li>
        <li className="goal_item">Рік</li>
        <li className="goal_item">Стор.</li>
      </ul>
      <div className="goal_emptyContainer">
        <svg className="goal_svg">
          <use href={sprite + "#icon-Book"}></use>
        </svg>
        <p>...</p>
      </div>
    </MyGoalListNormalStyled>
  );
};

export default MyGoalListNormal;
