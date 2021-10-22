import { useEffect, useState, useCallback } from "react";
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
import ModalMyTraining from "./modalMyTraining/ModalMyTraining";
import MyGoalList from "./myGoalBooks/myGoalList/MyGoalList";
import { getPlannedBooks } from "../../redux/books/booksSelectors";
import { removeSelectedBook } from "../../redux/target/targetActions";
import {
  getAllPlannedBooks,
  getAllSelectedBooks,
} from "../../redux/target/targetSelectors";
import sprite from "../../images/sprite.svg";

import { getPreplaning } from "../../redux/target/targetSelectors";


const Training = () => {
  const { t } = useTranslation();

  const [state, setState] = useState(false);
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();

  const selectedBooks = useSelector(getAllSelectedBooks);
  const books = useSelector(getPlannedBooks);

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


  const toggleModal = useCallback(() => {
    setModal((prevShowModal) => !prevShowModal);
  }, []);



  const onHandleClickStart = () => {
    // dispatch(addTargetOperation({}));
    setState(true);
  };


  const onHandleDelete = (e) => {
    const bookId = e.currentTarget.getAttribute("bookid");
    const bookToRemove = books.find((book) => book._id === bookId);

    dispatch(removeSelectedBook(bookToRemove));
  };

  return (
    <TrainingStyled>

      {modal ? (
        <ModalMyTraining toggleModal={toggleModal}>
          <MyTraining toggleModal={toggleModal} />
        </ModalMyTraining>
      ) : (
        <>
          <TargetRead state={state} />
          <MyGoalBooks />
          <button className="startTrainingBtn" onClick={onHandleClickStart}>
            {t("Start training")}
          </button>
          <MyGoalList data={selectedBooks} onClickDelete={onHandleDelete} />
          <GraphContainer />
          {state && <Statistic state={state} />}
          <button className="addTrainingBuuton" onClick={toggleModal}>
            <svg className="moreTrainingIcon">
              <use href={sprite + "#icon-more"} />
            </svg>
          </button>
        </>
      )}

    </TrainingStyled>
  );
};

export default Training;
