import MyGoalListNormalItem from "./myGoalListItemNormal/MyGoalListItemNormal";
import MyGoalListNormalStyled from "./MyGoalListNormalStyled";
import spite from "../../../../../images/Training/sprite.svg";

const MyGoalListNormal = ({ data }) => {
  return (
    <MyGoalListNormalStyled>
      <ul className="head_List">
        <li className="head_item">Назва книги</li>
        <li className="head_item">Автор</li>
        <li className="head_item">Рік</li>
        <li className="head_item">Стор.</li>
      </ul>
      <ul className="books_List">
        {data.map((item) => (
          <MyGoalListNormalItem item={item} key={item.id} />
        ))}
        <div className="moreBooksContainer">
          <svg className="moreBooksContainer_svgBook">
            <use href={spite + "#icon-Book"}></use>
          </svg>
          <p className="moreBooksContainer_points">...</p>
        </div>
      </ul>
    </MyGoalListNormalStyled>
  );
};

export default MyGoalListNormal;
