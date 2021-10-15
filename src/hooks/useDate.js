import { useState, useEffect } from "react";
import Moment from "moment";
import { extendMoment } from "moment-range";

const moment = extendMoment(Moment);

const initialStateDate = {
  currentDate: "",
  currentTime: "",
  startData: "03-10-2021",
  quantityDays: [],
};

const useDate = () => {
  const [stateData, setDate] = useState(initialStateDate);
  const { currentDate, quantityDays, startData } = stateData;

  useEffect(() => {
    getCurrentData();
    getCurrentTime();
    quantityDays.length === 0 && setQuantityDays(startData);
  }, [initialStateDate]);

  const getCurrentData = () => {
    const dateNow = moment()
      .toISOString()
      .substr(0, 10)
      .split(" ")
      .reverse()
      .join(".");

    setDate((prev) => ({ ...prev, currentDate: dateNow }));
    return dateNow;
  };

  const getCurrentTime = () => {
    const timeNow = moment().toISOString().substr(11, 8);
    setDate((prev) => ({ ...prev, currentTime: timeNow }));
    return timeNow;
  };

  const setQuantityDays = (startTargetData) => {
    const year = moment().get("year");
    const month = moment().get("month");
    const day = moment().get("date");

    // console.log(startData);
    // const tes = startData[4];
    // console.log(tes);

    // const res = startData.slice(1, startData.length);
    // console.log(res);

    const startTarget = new Date(startTargetData);
    // console.log(startTarget);
    const startData = moment(startTarget);
    // console.log(startData);

    const startYear = startData.get("year");
    console.log(startYear);
    //   startData.length === 10 ? startData.substring(6) : startData.substring(5);
    // // console.log(startYear);
    const startMonth = startData.get("month");
    console.log(startMonth);
    //   startData.length === 10
    //     ? startData.substring(3, 5)
    //     : startData.substring(2, 4);
    // // console.log(startMonth);
    const startDay = startData.get("date");
    console.log(startDay);
    //   startData.length === 10
    //     ? startData.substring(0, 2)
    //     : startData.substring(0, 1);
    // console.log(startDay);

    const cur = new Date(year, month, day);
    const start = new Date(startYear, startMonth, startDay);
    // console.log(start);
    // console.log(cur);

    const range = moment.range(start, cur);
    // console.log(range.diff("days"));
    let d = +startDay;

    for (let i = 0; i < range.diff("days"); i++) {
      d++;
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
    }
  };

  return [stateData, getCurrentData, getCurrentTime, setQuantityDays];
};

export default useDate;
