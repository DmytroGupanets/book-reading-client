import React from "react";
import MyTrainingStyled from "./MyTrainingStyled";

import SelectBooks from "./selectBooks/SelectBooks";
import { ThemeContext } from "../../App";
import { useContext } from "react";

import DatePickerTraining from "./datePickerTraining/DatePickerTraining";
import { useTranslation } from "react-i18next";

const MyTraining = ({ toggleModal }) => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  return (
    <MyTrainingStyled colors={theme}>
      <h3 className="trainingTitle">{t("My training")}</h3>
      <DatePickerTraining />
      <SelectBooks toggleModal={toggleModal} />
    </MyTrainingStyled>
  );
};

export default MyTraining;
