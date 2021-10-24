import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateRecordOperation } from "../../../redux/target/targetOperations";
import { getTargetId } from "../../../redux/target/targetSelectors";
import SelectDate from "../selectDate/SelectDate";

import StatisticFormStyled from "./StatisticFormStyled";
import { ThemeContext } from "../../App";
import useDate from "../../../hooks/useDate";

const initialState = {
  date: "",
  pages: "",
  isValidate: true,
};

const StatisticForm = () => {
  const { theme } = useContext(ThemeContext);

  const [statisticState, setStatistic] = useState(initialState);
  const { date, pages, isValidate } = statisticState;

  const [stateData, moment] = useDate();
  const { currentDate } = stateData;

  const targetId = useSelector(getTargetId);
  const dispatch = useDispatch();

  useEffect(() => {
    setStatistic((prev) => ({
      ...prev,
      date: currentDate.split("-").join("."),
    }));
  }, [currentDate]);

  const onHandleChange = (e) => {
    const { value } = e.target;
    setStatistic((prev) => ({
      ...prev,
      pages: value,
    }));
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();

    const record = {
      time: moment().toLocaleString().substr(16, 8),
      date: date,
      pages: pages,
    };

    if (pages === "" || date === "") {
      setStatistic((prev) => ({ ...prev, isValidate: false }));
      return;
    }

    dispatch(updateRecordOperation(targetId, record));
    setStatistic(initialState);
  };

  return (
    <StatisticFormStyled onSubmit={onHandleSubmit} colors={theme}>
      <h2 className="StatisticTitle">Результати</h2>
      <div className="formWrapper">
        <div className="inputWrapper">
          <SelectDate setStatistic={setStatistic} date={date} />
          <label className="statisticFormLabel">
            Кількість сторінок
            <input
              type="text"
              value={pages}
              className="statisticInput"
              onChange={onHandleChange}
              pattern="[0-9]{1,3}"
              placeholder=""
              title="только цифры от 1-й до 3-х"
            />
          </label>
        </div>
        <button className="statisticBtn" type="submit">
          Додати результат
        </button>
        {!isValidate && (
          <p className="InputErrorMassege">
            Укажите дату и колличество страниц
          </p>
        )}
      </div>
    </StatisticFormStyled>
  );
};

export default StatisticForm;
