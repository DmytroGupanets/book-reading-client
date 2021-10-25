import BtnModal from "../../modal/btnModal/BtnModal";
import ModalEndTariningStyled from "./ModalEndTrainingStyled";

import { ThemeContext } from "../../App";
import { useContext } from "react";
import sprite from "../statisticModal/sprite.svg";

const ModalEndTarining = ({ onClose, text }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <ModalEndTariningStyled colors={theme}>
      <svg className="StatisticModalIcon">
        <use href={sprite + "#icon-hand"} width="45"></use>
      </svg>
      <p className="modalText">{text}</p>
      <BtnModal onTogle={onClose} />
    </ModalEndTariningStyled>
  );
};

export default ModalEndTarining;
