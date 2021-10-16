import { useState, useEffect } from "react";
import Moment from "moment";
import { extendMoment } from "moment-range";

const moment = extendMoment(Moment);

const initialStateDate = {
  currentDate: "",
  currentTime: "",
  startData: "10-3-2021",
  quantityDays: [],
};

const year = moment().get("year");
const month = moment().get("month");
const day = moment().get("date");
const dateNow = `${day}-${month + 1}-${year}`;

// const hour = moment().get("hour");
// const minute = moment().get("minute");
// const seconds = moment().get("second");
// const timeNow = `${hour}:${minute}:${seconds}`;

const useDate = () => {
  const [stateData, setDate] = useState(initialStateDate);
  const { currentDate, currentTime, quantityDays, startData } = stateData;

  useEffect(() => {
    setCurrentData();
    // setCurrentTime();
    quantityDays && setQuantityBetweenDays(startData);
  }, [initialStateDate]);

  const setCurrentData = () => {
    setDate((prev) => ({ ...prev, currentDate: dateNow }));
  };

  const setCurrentTime = () => {
    const timeNow = moment().toLocaleString().substr(16, 8);
    setDate((prev) => ({ ...prev, currentTime: timeNow }));
    return timeNow;
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

    let d = +startDay;

    for (let i = 0; i < range.diff("days") + 1; i++) {
      const newDate = moment().set({
        year: startYear,
        month: startMonth,
        date: d,
      });
      setDate((prev) => ({
        ...prev,
        quantityDays: [
          ...prev.quantityDays,
          newDate.toISOString().substr(0, 10).split("-").reverse().join("."),
        ],
      }));
      d++;
    }
  };

  return [
    stateData,
    moment,
    setCurrentData,
    setCurrentTime,
    setQuantityBetweenDays,
  ];
};

export default useDate;
