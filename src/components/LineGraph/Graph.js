import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import useDate from "../../hooks/useDate";
import { getInProgressdBooks } from "../../redux/books/booksSelectors";
import {
  getRecords,
  getTargetEndDate,
  getTargetStartDate,
} from "../../redux/target/targetSelectors";
import { useDispatch } from "react-redux";
import { setPagesPerDay } from "../../redux/target/targetActions";
import Moment from "moment";
import { extendMoment } from "moment-range";
const moment = extendMoment(Moment);

const defaultData = [
  {
    PLAN: 0,
    ACT: 0,
    ПЛАН: 0,
    ФАКТ: 0,
  },
];

export default function Graph() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  // const [, , , , rangeBetwenStartAndEndDates] = useDate();

  const booksInProgress = useSelector(getInProgressdBooks);
  const records = useSelector(getRecords);
  const start = useSelector(getTargetStartDate);
  const end = useSelector(getTargetEndDate);

  const dateNow = new Date();
  const today = dateNow.toLocaleDateString("en-GB").split("/").join(".");

  const quantityDaysUptoNow = () => {
    let res = [];
    if (start === undefined) return false;

    res = rangeBetwenStartAndEndDates(start, today);
    res.unshift(start);

    return res;
  };
  //  ================================================================================
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

  // ==================================================================

  const getPlannedPagesPerDay = () => {
    if (
      start === undefined ||
      end === undefined ||
      start === "00.00.0000" ||
      end === "00.00.0000"
    )
      return false;
    const quantityDays = rangeBetwenStartAndEndDates(start, end);
    quantityDays.unshift(start);
    quantityDays.push(end);

    const sumOfDaysTotal = quantityDays.length;

    if (!sumOfDaysTotal) return false;
    const sumOfPagesTotal = booksInProgress.reduce((acc, book) => {
      acc += book.pages;
      return acc;
    }, 0);

    return Math.floor(sumOfPagesTotal / sumOfDaysTotal);
  };

  const plannedPagesPerDay = getPlannedPagesPerDay();

  useEffect(() => {
    plannedPagesPerDay
      ? dispatch(setPagesPerDay(plannedPagesPerDay))
      : dispatch(setPagesPerDay(0));
  }, [dispatch, plannedPagesPerDay]);

  const getReadPagesPerDay = () => {
    if (!records) return [];
    return records.reduce((acc, rec, idx) => {
      const ans = acc.findIndex((record) => record.date === rec.date);

      if (ans === -1) acc.push(rec);
      else
        acc[ans] = {
          ...acc[ans],
          pages: (+acc[ans].pages + +rec.pages).toString(),
        };

      return acc;
    }, []);
  };

  const createData = () => {
    const pagesReadPerDayRecords = getReadPagesPerDay();
    const result = [];
    const quantityDaysUpToToday = quantityDaysUptoNow();

    if (!quantityDaysUpToToday.length) return defaultData;
    for (let i = 0; i < quantityDaysUpToToday.length; i++) {
      const index = pagesReadPerDayRecords.findIndex(
        (rec) => rec.date === quantityDaysUpToToday[i]
      );

      if (index === -1) {
        result.push({
          PLAN: plannedPagesPerDay,
          ACT: 0,
          ПЛАН: plannedPagesPerDay,
          ФАКТ: 0,
        });
      } else {
        result.push({
          PLAN: plannedPagesPerDay,
          ACT: pagesReadPerDayRecords[index].pages,
          ПЛАН: plannedPagesPerDay,
          ФАКТ: pagesReadPerDayRecords[index].pages,
        });
      }
    }
    return result;
  };

  const data = createData();
  const getHighestValue = data.reduce((acc, data) => {
    if (+data.ACT > acc) acc = +data.ACT;

    return acc;
  }, 0);

  return (
    <ResponsiveContainer width={"100%"} height={215}>
      <LineChart
        width={811}
        height={300}
        data={data.length ? data : defaultData}
        margin={{
          top: 5,
          right: 30,
          left: -32,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="0" />
        <XAxis dataKey="name" />
        <YAxis domain={[0, getHighestValue]} tick={false} />
        <Tooltip />
        <Line
          type="monotone"
          dataKey={t("PLAN")}
          stroke="#091E3F"
          strokeWidth={2}
          dot={{ r: 5 }}
          activeDot={{ r: 5 }}
        />
        <Line
          type="monotone"
          dataKey={t("ACT")}
          stroke="#FF6B08"
          strokeWidth={2}
          dot={{ r: 5 }}
          activeDot={{ r: 5 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
