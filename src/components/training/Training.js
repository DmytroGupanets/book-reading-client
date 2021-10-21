import { useEffect, useState } from "react";
import { getOwnerId } from "../../redux/auth/authSelectors";
import { useDispatch, useSelector } from "react-redux";
import { getRecordOperation } from "../../redux/target/targetOperations";
import GraphContainer from "../LineGraph/GraphContainer";
import Statistic from "../statistic/Statistic";
import TargetRead from "./targetRead/TargetRead";
import TrainingStyled from "./TrainingStyled";
import MyTraining from "./myTraining/MyTraining";
import MyGoalBooks from "./myGoalBooks/MyGoalBooks";
import { getAllBooksOperation } from "../../redux/books/booksOperations";

const Training = () => {
  const [state, setState] = useState(false);
  const dispatch = useDispatch();

  const ownerId = useSelector(getOwnerId);

  useEffect(() => {
    dispatch(getRecordOperation(ownerId));
    dispatch(getAllBooksOperation());
  }, []);

  const onHandleClickStart = () => setState(true);

  return (
    <TrainingStyled>
      <TargetRead state={state} />
      <MyGoalBooks />
      <button className="startTrainingBtn" onClick={onHandleClickStart}>
        Початок тренування
      </button>
      <MyTraining />
      <GraphContainer />
      {state && <Statistic state={state} />}
    </TrainingStyled>
  );
};

export default Training;
