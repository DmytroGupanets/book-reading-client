import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateRecordOperation } from "../../../redux/target/targetOperations";

import SelectDate from "../selectDate/SelectDate";

import StatisticFormStyled from "./StatisticFormStyled";
import useDate from "../../../hooks/useDate";

import { getTargetId } from "../../../redux/target/targetSelectors";
import { ThemeContext } from "../../App";
import { useTranslation } from "react-i18next";

const initialState = {
  date: "",
  pages: "",
};

const StatisticForm = () => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  const [statistic, setStatistic] = useState(initialState);
  const { date, pages } = statistic;

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

    dispatch(updateRecordOperation(targetId, record));
    setStatistic(initialState);
  };

  return (
    <StatisticFormStyled onSubmit={onHandleSubmit} colors={theme}>
      <h2 className="StatisticTitle">{t("RESULTS")}</h2>
      <div className="formWrapper">
        <div className="inputWrapper">
          <SelectDate setStatistic={setStatistic} date={date} />
          <label className="statisticFormLabel">
            {t("Amount of pages")}
            <input
              type="text"
              value={pages}
              className="statisticInput"
              onChange={onHandleChange}
              required
            />
          </label>
        </div>
        <button className="statisticBtn" type="submit">
          {t("Add result")}
        </button>
      </div>
    </StatisticFormStyled>
  );
};

export default StatisticForm;
