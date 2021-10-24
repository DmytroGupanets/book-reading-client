import { useEffect, useState, useCallback, useContext } from "react";
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
  addSelectedBook,
  removeSelectedBook,
  resetPreplanning,
} from "../../redux/target/targetActions";
import {
  getAllSelectedBooks,
  getPreplanningEndDate,
  getPreplanningStartDate,
  getTargetActiv,
} from "../../redux/target/targetSelectors";
import sprite from "../../images/sprite.svg";

import { getPreplaning } from "../../redux/target/targetSelectors";
import useWindowDimensions from "../../hooks/resize";
import { ThemeContext } from "../App";
import Timer from "../timer/Timer";

const Training = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  const [state, setState] = useState(false);
  const [modal, setModal] = useState(false);

  const books = useSelector(getPlannedBooks);
  const ownerId = useSelector(getOwnerId);
  const targetActive = useSelector(getTargetActiv);
  const preplaning = useSelector(getPreplaning);
  const prepStartDate = useSelector(getPreplanningStartDate);
  const prepEndDate = useSelector(getPreplanningEndDate);
  const selectedBooks = useSelector(getAllSelectedBooks);

  const clientsWidth = useWindowDimensions().width;
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isPC, setIsPC] = useState(false);
  const [isTargetReady, setIsTargetReady] = useState(false);
  const [isActive, setIsActive] = useState(targetActive);

  useEffect(() => {
    setIsMobile(clientsWidth < 768);
    setIsTablet(clientsWidth > 767 && clientsWidth < 1280);
    setIsPC(clientsWidth > 1279);

    if (prepStartDate && prepEndDate && Boolean(selectedBooks.length))
      setIsTargetReady(true);
    else setIsTargetReady(false);

    setIsActive(targetActive);
  }, [clientsWidth, prepStartDate, prepEndDate, selectedBooks, targetActive]);

  useEffect(() => {
    dispatch(getAllBooksOperation());
    dispatch(getRecordOperation());
  }, []);

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

    await dispatch(getAllBooksOperation());
    await dispatch(resetPreplanning());
  };

  const onHandleDelete = (e) => {
    const bookId = e.currentTarget.getAttribute("bookid");
    const bookToRemove = books.find((book) => book._id === bookId);

    dispatch(removeSelectedBook(bookToRemove));
  };

  return (
    <TrainingStyled colors={theme}>
      {isMobile && modal && (
        <ModalMyTraining toggleModal={toggleModal}>
          <MyTraining toggleModal={toggleModal} />
        </ModalMyTraining>
      )}

      {!isPC && !modal && (
        <>
          {isActive && <Timer />}
          <TargetRead isActive={isActive} />
          {!isMobile && !isActive && <MyTraining />}
          <MyGoalList data={selectedBooks} onClickDelete={onHandleDelete} />
          {!isActive && isTargetReady && (
            <button className="startTrainingBtn" onClick={onHandleClickStart}>
              {t("Start training")}
            </button>
          )}
          <GraphContainer />
          {isActive && <Statistic isActive={isActive} />}
          {isMobile && (
            <button className="addTrainingBuuton" onClick={toggleModal}>
              <svg className="moreTrainingIcon">
                <use href={sprite + "#icon-more"} />
              </svg>
            </button>
          )}
        </>
      )}

      {isPC && (
        <>
          <div className="mainContentWrapper">
            {!isActive && <MyTraining />}
            {isActive && <Timer />}
            <MyGoalList data={selectedBooks} onClickDelete={onHandleDelete} />
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
