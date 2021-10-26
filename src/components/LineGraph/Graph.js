import React from "react";
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
  getTargetActiv,
  getTargetEndDate,
  getTargetStartDate,
} from "../../redux/target/targetSelectors";

const defaultData = [
  {
    PLAN: 0,
    ACT: 0,
    ПЛАН: 0,
    ФАКТ: 0,
  },
];

export default function Graph() {
  const [
    stateData,
    moment,
    chengeStartDataIdx,
    setQuantityBetweenDays,
    rangeBetwenStartAndEndDates,
  ] = useDate();

  const booksInProgress = useSelector(getInProgressdBooks);
  const records = useSelector(getRecords);
  const start = useSelector(getTargetStartDate);
  const end = useSelector(getTargetEndDate);
  const isActive = useSelector(getTargetActiv);

  const dateNow = new Date();
  const today = dateNow.toLocaleDateString("en-GB").split("/").join(".");

  const quantityDaysUptoNow =
    start && today && rangeBetwenStartAndEndDates(start, today);

  const quantityDays = start && end && rangeBetwenStartAndEndDates(start, end);

  const sumOfPagesTotal = booksInProgress.reduce((acc, book) => {
    acc += book.pages;
    return acc;
  }, 0);

  const sumOfDaysTotal = quantityDays?.length;

  const plannedPagesPerDay = Math.floor(sumOfPagesTotal / sumOfDaysTotal);

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
    if (!quantityDaysUptoNow) return defaultData;
    for (let i = 0; i < quantityDaysUptoNow.length; i++) {
      const index = pagesReadPerDayRecords.findIndex(
        (rec) => rec.date === quantityDaysUptoNow[i]
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

  const { t } = useTranslation();
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
