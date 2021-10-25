import MyGoalListMob from "./myGoalListMob/MyGoalListMob";
import MyGoalListNormal from "./myGoalListNormal/MyGoalListNormal";
import { resize } from "../../../../hooks/";

const MyGoalList = ({ data, onClickDelete }) => {
  const { width } = resize();
  return (
    <>
      {width > 767 ? (
        <MyGoalListNormal data={data} onClickDelete={onClickDelete} />
      ) : (
        <MyGoalListMob data={data} onClickDelete={onClickDelete} />
      )}
    </>
  );
};

export default MyGoalList;
