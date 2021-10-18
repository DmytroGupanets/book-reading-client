import { useState } from "react";
import TargetReadStyled from "./TargetReadStyled";
import colors from "../../../styles/colors";

const TargetRead = ({ state }) => {
  const qttBooks = 5;
  const qttDays = 12;
  const readingBooks = 3;

  return (
    <TargetReadStyled colors={colors} state={state}>
      <div className="tabletWrapperStyled">
        <div className="titleWrapper">
          <h3 className="targetReadTitle">Моя мета прочитати</h3>
        </div>
      </div>

      <ul className="targetReadlist">
        <li className="targetReadItem">
          <div className="targetReadDig">{qttBooks}</div>
          <p className="targetReadItemDescription">Кількість книжок</p>
        </li>
        <li className="targetReadItem">
          <div className="targetReadDig">{qttDays}</div>
          <p className="targetReadItemDescription">Кількість днів</p>
        </li>
        {state && (
          <li className="targetReadItem">
            <div className="targetReadDigRemain"> {readingBooks}</div>
            <p className="targetReadItemDescription">Залишилось книжок</p>
          </li>
        )}
      </ul>
    </TargetReadStyled>
  );
};

export default TargetRead;
