import MyGoalListItemMob from "./myGoalListItemMob/MyGoalListItemMob";
import MyGoalListMobStyled from "./MyGoalListMobStyled";

const MyGoalListMob = ({ data }) => {
  return (
    <MyGoalListMobStyled>
      <ul className="book_ListMob">
        {data.map((item) => (
          <MyGoalListItemMob item={item} key={item.id} />
        ))}
      </ul>
    </MyGoalListMobStyled>
  );
};

export default MyGoalListMob;
