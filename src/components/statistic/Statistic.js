import React, { useState } from "react";
import StatisticForm from "./statisticForm/StatisticForm";
import StatisticList from "./statisticList/StatisticList";
import StatisticModal from "./statisticModal/StatisticModal";
import StatisticStyled from "./StatisticStyled";

export default function Statistic() {
  const [showModal, setShowModal] = useState(false);

  const onClose = () => {
    setShowModal(false);
  };

  const onChange = () => {
    setShowModal(true);
  };

  return (
    <StatisticStyled>
      <StatisticForm />
      <StatisticList />
      <div>
        <button type="button" onClick={onChange}>
          MODAL
        </button>
      </div>
      {showModal && <StatisticModal onClose={onClose} />}
    </StatisticStyled>
  );
}
