import { useState } from "react";
import Statistic from "../statistic/Statistic";
import TargetRead from "./targetRead/TargetRead";
import TrainingStyled from "./TrainingStyled";

const Target = () => {
  const [state, setState] = useState(false);

  const onHandleClick = () => setState(true);

  return (
    <TrainingStyled>
      <button onClick={onHandleClick}>Початок тренування</button>
      <TargetRead state={state} />
      {state && <Statistic state={state} />}
    </TrainingStyled>
  );
};

export default Target;
