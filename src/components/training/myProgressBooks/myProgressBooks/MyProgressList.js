import MyProgressListMob from "./myProgresslListMob/MyProgresslListMob";
import MyProgressListNormal from "./myProgressNormal/MyProgressListNormal";
import { resize } from "../../../../hooks/";

const MyProgresslList = ({ data }) => {
  const { width } = resize();
  return (
    <>
      {width > 767 ? (
        <MyProgressListNormal data={data} />
      ) : (
        <MyProgressListMob data={data} />
      )}
    </>
  );
};

export default MyProgresslList;
