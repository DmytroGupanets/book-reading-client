import { useEffect, useState, useCallback } from "react";
import { getOwnerId } from "../../redux/auth/authSelectors";
import { useDispatch, useSelector } from "react-redux";
import {
  addTargetOperation,
  getRecordOperation,
  // getRecordOperation,
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
import {
  removeSelectedBook,
  resetPreplanning,
} from "../../redux/target/targetActions";
import {
  // getAllPlannedBooks,
  getAllSelectedBooks,
  getTargetActiv,
} from "../../redux/target/targetSelectors";
import sprite from "../../images/sprite.svg";

import { getPreplaning } from "../../redux/target/targetSelectors";

const Training = () => {
  const { t } = useTranslation();

  const [state, setState] = useState(false);
  const [modal, setModal] = useState(false);

  const dispatch = useDispatch();

  const books = useSelector(getPlannedBooks);
  const ownerId = useSelector(getOwnerId);
  const isActive = useSelector(getTargetActiv);
  const preplaning = useSelector(getPreplaning);
  const selectedBooks = useSelector(getAllSelectedBooks);

  // useEffect(() => {
  //   dispatch(getRecordOperation(ownerId));
  // }, []);

  const toggleModal = useCallback(() => {
    setModal((prevShowModal) => !prevShowModal);
  }, []);

  const onHandleClickStart = async () => {
    const target = {
      startDate: preplaning.startDate,
      endDate: preplaning.endDate,
      books: preplaning.selectedBooks.map((el) => el._id),
    };
    if (selectedBooks) {
      await dispatch(addTargetOperation(target));
    }
    // setState(true);

    await dispatch(getAllBooksOperation());
    await dispatch(resetPreplanning());
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
          <TargetRead isActive={isActive} />
          <MyGoalBooks />
          {!isActive && (
            <button className="startTrainingBtn" onClick={onHandleClickStart}>
              {t("Start training")}
            </button>
          )}
          <MyGoalList data={selectedBooks} onClickDelete={onHandleDelete} />
          <GraphContainer />
          {isActive && <Statistic isActive={isActive} />}
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
