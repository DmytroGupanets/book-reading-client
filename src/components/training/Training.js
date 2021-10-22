import { useEffect, useState } from "react";
import { getOwnerId } from "../../redux/auth/authSelectors";
import { useDispatch, useSelector } from "react-redux";
import {
  addTargetOperation,
  getRecordOperation,
} from "../../redux/target/targetOperations";
import GraphContainer from "../LineGraph/GraphContainer";
import Statistic from "../statistic/Statistic";
import TargetRead from "./targetRead/TargetRead";
import TrainingStyled from "./TrainingStyled";
import MyTraining from "./myTraining/MyTraining";
import { useTranslation } from "react-i18next";

import MyGoalBooks from "./myGoalBooks/MyGoalBooks";
import { getAllBooksOperation } from "../../redux/books/booksOperations";
import { getPreplaning } from "../../redux/target/targetSelectors";

const Training = () => {
  const { t } = useTranslation();

  const [state, setState] = useState(false);
  const dispatch = useDispatch();

  const ownerId = useSelector(getOwnerId);
  const preplaning = useSelector(getPreplaning);
  // console.log(
  //   preplaning.startDate
  //     .toISOString()
  //     .substr(0, 10)
  //     .split("-")
  //     .reverse()
  //     .join(".")
  // );
  // console.log(preplaning);
  // const obj = {
  //   startDate: preplaning.startDate,
  //   endDate: preplaning.endDate,
  //   books: preplaning.selectedBooks,
  // };
  // console.log(obj);

  useEffect(() => {
    state && dispatch(getRecordOperation(ownerId));
    dispatch(getAllBooksOperation());
  }, [dispatch, ownerId, state]);

  const onHandleClickStart = () => {
    // dispatch(addTargetOperation({}));
    setState(true);
  };

  return (
    <TrainingStyled>
      <TargetRead state={state} />
      <MyGoalBooks />
      <button className="startTrainingBtn" onClick={onHandleClickStart}>
        {t("Start training")}
      </button>
      <MyTraining />
      <GraphContainer />
      {state && <Statistic state={state} />}
    </TrainingStyled>
  );
};

export default Training;
