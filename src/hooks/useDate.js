import { useState, useEffect } from "react";
import Moment from "moment";
import { extendMoment } from "moment-range";
import { useSelector } from "react-redux";
import { startDate } from "../redux/target/targetSelectors";

const moment = extendMoment(Moment);

const initialStateDate = {
  currentDate: "",
  quantityDays: [],
};

const year = moment().get("year");
const month = moment().get("month");
const day = moment().get("date");
const dateNow = `${day}-${month + 1}-${year}`;

const useDate = () => {
  const [stateData, setDate] = useState(initialStateDate);
  const { quantityDays } = stateData;

  const start = useSelector(startDate);

  useEffect(() => {
    setCurrentData();
    quantityDays && start && setQuantityBetweenDays(chengeStartDataIdx(start));
  }, []);

  const setCurrentData = () => {
    setDate((prev) => ({ ...prev, currentDate: dateNow }));
  };

  const chengeStartDataIdx = (str) => {
    const startDateStr = str.slice().split(".");
    [startDateStr[0], startDateStr[1]] = [startDateStr[1], startDateStr[0]];
    return startDateStr.join("-");
  };

  const rangeBetwenStartAndEndDates = (startDate, endDate) => {
    const reverseStart = startDate.split(".").reverse().join("-");
    const reverseEnd = endDate.split(".").reverse().join("-");
    const start = new Date(reverseStart);
    const end = new Date(reverseEnd);
    const range = moment.range(start, end);
    return range.diff("days");
  };

  const setQuantityBetweenDays = (startTargetData) => {
    const startTarget = new Date(startTargetData);
    const startData = moment(startTarget);
    const startYear = startData.get("year");
    const startMonth = startData.get("month");
    const startDay = startData.get("date");

    const cur = new Date(year, month, day);
    const start = new Date(startYear, startMonth, startDay);
    const range = moment.range(start, cur);

    let newDateRange = +startDay;

    for (let i = 0; i < range.diff("days") + 1; i++) {
      const newDate = moment().set({
        year: startYear,
        month: startMonth,
        date: newDateRange,
      });
      setDate((prev) => ({
        ...prev,
        quantityDays: [
          ...prev.quantityDays,
          newDate.toISOString().substr(0, 10).split("-").reverse().join("."),
        ],
      }));
      newDateRange++;
    }
  };

  return [
    stateData,
    moment,
    setCurrentData,
    setQuantityBetweenDays,
    rangeBetwenStartAndEndDates,
  ];
};

export default useDate;
