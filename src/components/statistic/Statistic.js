import React, { useState } from "react";
import Modal from "../modal/Modal";
import StatisticForm from "./statisticForm/StatisticForm";
import StatisticList from "./statisticList/StatisticList";
import StatisticModal from "./statisticModal/StatisticModal";
import StatisticStyled from "./StatisticStyled";

import ModalEndTarining from "./modalEndTraining/ModalEndTraining";

const Statistic = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalTimerOut, setModalTimerOut] = useState(false);
  const [modalTargetSuccess, setModalTargetSuccess] = useState(false);
  const [modalBookSuccess, setModalBookSuccess] = useState(false);

  const toggleModal = () => {
    setShowModal((isActive) => !isActive);
  };
  const toggleModalTimer = () => {
    setModalTimerOut((isActive) => !isActive);
  };
  const toggleModalTargetSuccess = () => {
    setModalTargetSuccess((isActive) => !isActive);
  };
  const toggleModalBookSuccess = () => {
    setModalBookSuccess((isActive) => !isActive);
  };

  const textModalTimeOut = () =>
    `Не останавливайся! Тебе осталось чиитать ${10} страниц Ты можешь достичь этой цели`;

  const textModalTargetSuccess = () =>
    `Поздравляем ты вовремя прочитал ${5} книг так держать`;

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
