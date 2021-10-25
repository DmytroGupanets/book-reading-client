import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import useDate from '../../hooks/useDate';
import { getInProgressdBooks } from '../../redux/books/booksSelectors';
import {
  getPreplanningEndDate,
  getPreplanningStartDate,
  getRecords,
} from '../../redux/target/targetSelectors';

// РАСЧЕТ ПЛАНА = СУММА СТРАНИЦ ВСЕХ ИЗБРАННЫХ КНИЖЕК / КОЛИЧЕСТВО ДНЕЙ ВЫБРАННОГО ПЕРИОДА

const data = [
  {
    PLAN: 30,
    ACT: 0,
    ПЛАН: 30,
    ФАКТ: 0,
  },
  {
    PLAN: 30,
    ACT: 23,
    ПЛАН: 30,
    ФАКТ: 23,
  },
];

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
    // setCurrentData,
    setQuantityBetweenDays,
    rangeBetwenStartAndEndDates,
  ] = useDate();

  const booksInProgress = useSelector(getInProgressdBooks);
  const records = useSelector(getRecords);
  const start = useSelector(getPreplanningStartDate);
  const end = useSelector(getPreplanningEndDate);

  const quantytyDays = start && end && rangeBetwenStartAndEndDates(start, end);
  console.log(quantytyDays);
  const { t } = useTranslation();
  return (
    <ResponsiveContainer width={'100%'} height={215}>
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
        <YAxis tick={false} />
        <Tooltip />
        <Line
          type="monotone"
          dataKey={t('PLAN')}
          stroke="#091E3F"
          strokeWidth={2}
          dot={{ r: 5 }}
          activeDot={{ r: 5 }}
        />
        <Line
          type="monotone"
          dataKey={t('ACT')}
          stroke="#FF6B08"
          strokeWidth={2}
          dot={{ r: 5 }}
          activeDot={{ r: 5 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
