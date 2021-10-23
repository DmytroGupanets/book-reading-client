import MyGoalListDefMob from "./myGoalListMob/MyGoalListMob";
import MyGoalListNormal from "./myGoalListNormal/MyGoalListNormal";
import { resize } from "../../../../hooks";

const MyGoalListDefault = () => {
  const { width } = resize();
  return <>{width > 768 ? <MyGoalListNormal /> : <MyGoalListDefMob />}</>;
};

export default MyGoalListDefault;
