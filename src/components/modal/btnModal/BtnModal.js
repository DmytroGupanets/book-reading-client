import BtnModalStyled from "./BtnModalStyled";
import { ThemeContext } from "../../App";
import { useContext } from "react";

const BtnModal = ({ onTogle }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <BtnModalStyled colors={theme}>
      <button className="btnModal" onClick={onTogle}>
        Ok
      </button>
    </BtnModalStyled>
  );
};

export default BtnModal;
