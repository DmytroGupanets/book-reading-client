import { useState } from "react";
import MyGoalCountStyled from "./MyGoalCountStyled";
import MyGoalCountFull from "./MyGoalCountFull/MyGoalCountFull";
import MyGoalCountDefault from "./MyGoalCountDefault/MyGoalCountDefault";

const data = true;

const MyGoalCount = () => {
  const [stateBooks, setstateBooks] = useState(10);
  const [stateDays, setstateDays] = useState(30);
  return (
    <MyGoalCountStyled>
      <h2 className="MyGoalCount_Title">Моя мета прочитати</h2>
      {data === true ? (
        <MyGoalCountFull books={stateBooks} days={stateDays} />
      ) : (
        <MyGoalCountDefault />
      )}
    </MyGoalCountStyled>
  );
};

export default MyGoalCount;
