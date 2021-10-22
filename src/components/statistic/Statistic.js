import React, { useState } from "react";
import Modal from "../modal/Modal";
import StatisticForm from "./statisticForm/StatisticForm";
import StatisticList from "./statisticList/StatisticList";
import StatisticModal from "./statisticModal/StatisticModal";
import StatisticStyled from "./StatisticStyled";

export default function Statistic() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((state) => !state);
  };

  return (
    <StatisticStyled>
      <StatisticForm />
      <StatisticList toggleModal={toggleModal} />
      <div>
        <button type="button" onClick={toggleModal}>
          STATISTIC MODAL
        </button>
      </div>
      {showModal && (
        <Modal onClose={toggleModal}>
          <StatisticModal onClose={toggleModal} />
        </Modal>
      )}
    </StatisticStyled>
  );
}
