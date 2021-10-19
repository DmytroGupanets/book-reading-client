import MyGoalListNormalItem from "./myGoalListItemNormal/MyGoalListItemNormal";
import MyGoalListNormalStyled from "./MyGoalListNormalStyled";
import spite from "../../../../../images/Training/sprite.svg";

const MyGoalListNormal = ({ data }) => {
  return (
    <MyGoalListNormalStyled>
      <ul className="myGoalListNorm_ListHead">
        <li className="myGoalListNorm_item">Назва книги</li>
        <li className="myGoalListNorm_item">Автор</li>
        <li className="myGoalListNorm_item">Рік</li>
        <li className="myGoalListNorm_item">Стор.</li>
      </ul>
      <ul className="myGoalListNorm_ListBooks">
        {data.map((item) => (
          <MyGoalListNormalItem item={item} key={item.id} />
        ))}
        <div className="myGoalListNorm_MoreBooksContainer">
          <svg className="myGoalListNorm_SvgBook">
            <use href={spite + "#icon-Book"}></use>
          </svg>
          <p className="myGoalListNorm_Points">...</p>
        </div>
      </ul>
    </MyGoalListNormalStyled>
  );
};

export default MyGoalListNormal;
