import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTargetId } from "../../redux/target/targetSelectors";
import { completeTargetOperation } from "../../redux/target/targetOperations";

import Modal from "../modal/Modal";
import StatisticForm from "./statisticForm/StatisticForm";
import StatisticList from "./statisticList/StatisticList";
import StatisticModal from "./statisticModal/StatisticModal";
import ModalEndTarining from "./modalEndTraining/ModalEndTraining";

import StatisticStyled from "./StatisticStyled";
import { getInProgressdBooks } from "../../redux/books/booksSelectors";

const Statistic = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalTimerOut, setModalTimerOut] = useState(false);
  const [modalTargetSuccess, setModalTargetSuccess] = useState(false);
  const [modalBookSuccess, setModalBookSuccess] = useState(false);

  const dispatch = useDispatch();
  const targetId = useSelector(getTargetId);
  const booksInProgress = useSelector(getInProgressdBooks);

  const toggleModal = () => {
    setShowModal((isActive) => !isActive);
  };
  const toggleModalTimer = () => {
    setModalTimerOut((isActive) => !isActive);
  };
  const toggleModalBookSuccess = () => {
    setModalBookSuccess((isActive) => !isActive);
  };
  const toggleModalTargetSuccess = () => {
    setModalTargetSuccess((isActive) => !isActive);
    if (modalTargetSuccess) {
      dispatch(completeTargetOperation(targetId));
    }
  };

  const textModalTimeOut = () => {
    return `Не останавливайся! Тебе осталось чиитать ${1} страниц Ты можешь достичь этой цели`;
  };

  const textModalTargetSuccess = () =>
    `Ты вовремя прочитал книг в количестве ${booksInProgress.length} шт., так держать!`;

  const textModalBookSuccess = () =>
    `Поздравляем еще одна книга прочитана так держать`;

  return (
    <StatisticStyled>
      <StatisticForm />
      <StatisticList
        showModal={showModal}
        toggleModal={toggleModal}
        toggleModalTimer={toggleModalTimer}
        toggleModalTargetSuccess={toggleModalTargetSuccess}
        toggleModalBookSuccess={toggleModalBookSuccess}
      />
      {showModal && (
        <Modal onClose={toggleModal}>
          <StatisticModal onClose={toggleModal} />
        </Modal>
      )}
      {modalTimerOut && (
        <Modal onClose={toggleModalTimer}>
          <ModalEndTarining
            onClose={toggleModalTimer}
            text={textModalTimeOut()}
          />
        </Modal>
      )}
      {modalTargetSuccess && (
        <Modal onClose={toggleModalTargetSuccess}>
          <ModalEndTarining
            onClose={toggleModalTargetSuccess}
            text={textModalTargetSuccess()}
          />
        </Modal>
      )}
      {modalBookSuccess && (
        <Modal onClose={toggleModalBookSuccess}>
          <ModalEndTarining
            onClose={toggleModalBookSuccess}
            text={textModalBookSuccess()}
          />
        </Modal>
      )}
    </StatisticStyled>
  );
};

export default Statistic;
