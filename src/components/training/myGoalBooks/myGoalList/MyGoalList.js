import MyGoalListMob from "./myGoalListMob/MyGoalListMob";
import MyGoalListNormal from "./myGoalListNormal/MyGoalListNormal";
import resize from "../../../../hooks/";

const MyGoalList = ({ data }) => {
  const { width } = resize();
  return (
    <>
      {width > 768 ? (
        <MyGoalListNormal data={data} />
      ) : (
        <MyGoalListMob data={data} />
      )}
    </>
  );
};

export default MyGoalList;
