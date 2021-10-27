import { useEffect, useState, useCallback, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTargetOperation } from "../../redux/target/targetOperations";
import GraphContainer from "../LineGraph/GraphContainer";
import Statistic from "../statistic/Statistic";
import TargetRead from "./targetRead/TargetRead";
import TrainingStyled from "./TrainingStyled";
import MyTraining from "./myTraining/MyTraining";
import { useTranslation } from "react-i18next";
import { getAllBooksOperation } from "../../redux/books/booksOperations";
import ModalMyTraining from "./modalMyTraining/ModalMyTraining";
import {
  addPlaningBook,
  removeSelectedBook,
  resetPreplanning,
} from "../../redux/target/targetActions";
import {
  getAllSelectedBooks,
  getPreplanningEndDate,
  getPreplanningStartDate,
  getTargetActiv,
} from "../../redux/target/targetSelectors";
import { getInProgressdBooks } from "../../redux/books/booksSelectors";
import sprite from "../../images/sprite.svg";

import { getPreplaning } from "../../redux/target/targetSelectors";
import useWindowDimensions from "../../hooks/resize";
import { ThemeContext } from "../App";
import Timer from "../timer/Timer";
import MyGoalBooks from "./myGoalBooks/MyGoalBooks";
import MyProgressBooks from "./myProgressBooks/MyProgressBooks";
import Modal from "../modal/Modal";

const Training = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  const [modal, setModal] = useState(false);

  const targetActive = useSelector(getTargetActiv);
  const preplaning = useSelector(getPreplaning);
  const prepStartDate = useSelector(getPreplanningStartDate);
  const prepEndDate = useSelector(getPreplanningEndDate);
  const selectedBooks = useSelector(getAllSelectedBooks);
  const progressBooks = useSelector(getInProgressdBooks);

  const clientsWidth = useWindowDimensions().width;
  const [isMobile, setIsMobile] = useState(false);
  const [isPC, setIsPC] = useState(false);
  const [isTargetReady, setIsTargetReady] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsMobile(clientsWidth < 768);
    setIsPC(clientsWidth > 1279);

    if (prepStartDate && prepEndDate && Boolean(selectedBooks.length))
      setIsTargetReady(true);
    else setIsTargetReady(false);

    if (targetActive !== undefined) {
      setIsActive(targetActive);
    }
  }, [clientsWidth, prepStartDate, prepEndDate, selectedBooks, targetActive]);

  const toggleModal = useCallback(() => {
    setModal((prevShowModal) => !prevShowModal);
  }, []);

  const onHandleClickStart = async () => {
    if (
      preplaning.startDate === "" ||
      preplaning.endDate === "" ||
      preplaning.selectedBooks.length === 0
    )
      return;

    const target = {
      startDate: preplaning.startDate,
      endDate: preplaning.endDate,
      books: preplaning.selectedBooks.map((el) => el._id),
    };
    if (selectedBooks.length > 0) {
      await dispatch(addTargetOperation(target));

      await dispatch(getAllBooksOperation());
      await dispatch(resetPreplanning());
    }
  };

  const onHandleDelete = (_id) => {
    const bookToRemove = selectedBooks.find((book) => book._id === _id);

    dispatch(removeSelectedBook(bookToRemove));
    dispatch(addPlaningBook(bookToRemove));
  };

  return (
    <TrainingStyled modal={modal} colors={theme}>
      {isMobile && modal && (
        <ModalMyTraining toggleModal={toggleModal}>
          <MyTraining toggleModal={toggleModal} />
        </ModalMyTraining>
        // <Modal toggleModal={toggleModal}>
        //   <MyTraining toggleModal={toggleModal} />
        // </Modal>
      )}

      {!isPC && !modal && (
        <>
          {isActive && <Timer />}
          <TargetRead isActive={isActive} />
          {!isMobile && !isActive && <MyTraining />}
          {isActive && <MyProgressBooks data={progressBooks} />}
          {!isActive && (
            <MyGoalBooks data={selectedBooks} onClickDelete={onHandleDelete} />
          )}
          {!isActive && isTargetReady && (
            <button className="startTrainingBtn" onClick={onHandleClickStart}>
              {t("Start training")}
            </button>
          )}
          <GraphContainer />
          {isActive && <Statistic isActive={isActive} />}
          {isMobile && (
            <div className="buttonWrapper">
              <button className="addTrainingButton" onClick={toggleModal}>
                <svg className="moreTrainingIcon">
                  <use href={sprite + "#icon-more"} />
                </svg>
              </button>
            </div>
          )}
        </>
      )}

      {isPC && (
        <>
          <div className="mainContentWrapper">
            {!isActive && <MyTraining />}
            {isActive && <Timer />}
            {isActive && <MyProgressBooks data={progressBooks} />}
            {!isActive && (
              <MyGoalBooks
                data={selectedBooks}
                onClickDelete={onHandleDelete}
              />
            )}
            {!isActive && isTargetReady && (
              <button className="startTrainingBtn" onClick={onHandleClickStart}>
                {t("Start training")}
              </button>
            )}
            <GraphContainer />
          </div>

          <div className="rightStatisticsWrapper">
            <TargetRead isActive={isActive} />
            {isActive && <Statistic isActive={isActive} />}
          </div>
        </>
      )}
    </TrainingStyled>
  );
};

export default Training;
