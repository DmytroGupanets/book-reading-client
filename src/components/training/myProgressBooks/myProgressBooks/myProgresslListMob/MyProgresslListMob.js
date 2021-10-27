import MyProgresslListItemMob from "./myProgressListItemMob/MyProgressListItemMob";
import MyProgressListMobStyled from "./MyProgressListMobStyled";

const MyGoalListMob = ({ data }) => {
  return (
    <MyProgressListMobStyled>
      <ul className="books_ListMob">
        {data.map((item, idx) => (
          <MyProgresslListItemMob idx={idx} item={item} key={item._id} />
        ))}
      </ul>
    </MyProgressListMobStyled>
  );
};

export default MyGoalListMob;
