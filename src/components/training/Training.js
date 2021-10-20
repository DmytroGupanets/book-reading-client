import { useEffect, useState } from "react";
import { getOwnerId } from "../../redux/auth/authSelectors";
import { useDispatch, useSelector } from "react-redux";
import { getRecordOperation } from "../../redux/target/targetOperations";

import Statistic from "../statistic/Statistic";
import TargetRead from "./targetRead/TargetRead";
import TrainingStyled from "./TrainingStyled";
import MyTraining from "./myTraining/MyTraining";

const Training = () => {
  const [state, setState] = useState(false);

  const dispatch = useDispatch();

  const ownerId = useSelector(getOwnerId);

  useEffect(() => {
    dispatch(getRecordOperation(ownerId));
  }, []);

  const onHandleClick = () => setState(true);

  return (
    <TrainingStyled>
      <button onClick={onHandleClick}>Початок тренування</button>
      <TargetRead state={state} />
      <MyTraining />
      {state && <Statistic state={state} />}
    </TrainingStyled>
  );
};

export default Training;
