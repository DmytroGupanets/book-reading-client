import MyGoalBooks from "./myGoalBooks/MyGoalBooks";
import MyGoalCount from "./myGoalCount/MyGoalCount";
import TrainingStyled from "./TraininStyled";

const Training = () => {
  return (
    <TrainingStyled>
      <MyGoalCount />
      <MyGoalBooks />
    </TrainingStyled>
  );
};

export default Training;
