import React, { useState } from "react";
import MyTrainingStyled from "./MyTrainingStyled";

import SelectBooks from "./selectBooks/SelectBooks";
import { ThemeContext } from "../../App";
import { useContext } from "react";

import DatePickerTraining from "./datePickerTraining/DatePickerTraining";

const MyTraining = ({ toggleModal, func }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <MyTrainingStyled colors={theme}>
      <h3 className="trainingTitle">Моє тренування</h3>
      <DatePickerTraining />
      <SelectBooks toggleModal={toggleModal} />
    </MyTrainingStyled>
  );
};

export default MyTraining;
