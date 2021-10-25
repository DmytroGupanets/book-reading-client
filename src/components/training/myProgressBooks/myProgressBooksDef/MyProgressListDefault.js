import MyProgressListDefMob from "./myProgressListMob/MyProgressListMob";
import MyProgresslListNormal from "./myProgressListNormal/MyProgresslListNormal";
import { resize } from "../../../../hooks";

const MyProgressListDefault = () => {
  const { width } = resize();
  return (
    <>{width > 767 ? <MyProgresslListNormal /> : <MyProgressListDefMob />}</>
  );
};

export default MyProgressListDefault;
