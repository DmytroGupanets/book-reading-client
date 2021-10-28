import { useState, useEffect } from "react";
import Moment from "moment";
import { extendMoment } from "moment-range";
import { useSelector } from "react-redux";
import { getTargetStartDate } from "../redux/target/targetSelectors";

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

  const startTarget = useSelector(getTargetStartDate);
  const start = startTarget && startTarget.split(".").reverse().join("-");

  useEffect(() => {
    setCurrentData();

    setQuantityBetweenDays(chengeStartDataIdx(start));
  }, [start]);

  const setCurrentData = () => {
    setDate((prev) => ({ ...prev, currentDate: dateNow }));
  };

  // ============================================================chengeStartDataIdx
  // takes a date in the format "yyyy / mm / dd" converts to "mm / dd / yyyy"
  const chengeStartDataIdx = (str) => {
    if (str === undefined) {
      return;
    }

    const startDateStr = str.slice().split(".");
    [startDateStr[0], startDateStr[1]] = [startDateStr[1], startDateStr[0]];
    return startDateStr.join("-");
  };
  // ============================================================chengeStartDataIdx

  // ============================================================rangeBetwenStartAndEndDates
  // calculates the difference between the start and end dates
  // returns an array of days accepts data in the format "dd / mm / yyyy"
  const rangeBetwenStartAndEndDates = (startDate, endDate) => {
    if (startDate === "00.00.0000" || endDate === "00.00.0000") {
      return [];
    }
    const arr = [];
    const reverseStart = startDate.split(".").reverse().join("-");
    const reverseEnd = endDate.split(".").reverse().join("-");
    const start = new Date(reverseStart);
    const end = new Date(reverseEnd);
    const range = moment.range(start, end);

    let newDateRange = start.getDate();

    for (let i = 0; i < range.diff("days"); i++) {
      newDateRange++;
      const newDate = moment().set({
        year: start.getFullYear,
        month: start.getMonth(),
        date: newDateRange,
      });

      arr.push(
        newDate.toISOString().substr(0, 10).split("-").reverse().join(".")
      );
    }
    return arr;
  };
  // ============================================================rangeBetwenStartAndEndDates

  // ============================================================setQuantityBetweenDays
  // calculates the difference between the current and the start day
  // returns an array of days accepts only the start date in the format "mm / dd / yyyy"
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

    for (let i = 0; i <= range.diff("days"); i++) {
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
  // ============================================================setQuantityBetweenDays

  return [
    stateData,
    moment,
    chengeStartDataIdx,
    setQuantityBetweenDays,
    rangeBetwenStartAndEndDates,
  ];
};

export default useDate;
