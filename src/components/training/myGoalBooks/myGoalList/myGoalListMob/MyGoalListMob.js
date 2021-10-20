import MyGoalListItemMob from "./myGoalListItemMob/MyGoalListItemMob";
import MyGoalListMobStyled from "./MyGoalListMobStyled";

const MyGoalListMob = ({ data, onClickDelete }) => {
  return (
    <MyGoalListMobStyled>
      <ul className="books_ListMob">
        {data.map((item) => (
          <MyGoalListItemMob
            item={item}
            key={item._id}
            onClickDelete={onClickDelete}
          />
        ))}
      </ul>
    </MyGoalListMobStyled>
  );
};

export default MyGoalListMob;
