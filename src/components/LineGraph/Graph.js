import React from "react";
import { useTranslation } from "react-i18next";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// РАСЧЕТ ПЛАНА = СУММА СТРАНИЦ ВСЕХ ИЗБРАННЫХ КНИЖЕК / КОЛИЧЕСТВО ДНЕЙ ВЫБРАННОГО ПЕРИОДА

const data = [
  {
    PLAN: 30,
    ACT: 29,
    ПЛАН: 30,
    ФАКТ: 29,
  },
  {
    PLAN: 40,
    ACT: 40,
    ПЛАН: 40,
    ФАКТ: 40,
  },
  {
    PLAN: 67,
    ACT: 56,
    ПЛАН: 67,
    ФАКТ: 56,
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
  const { t } = useTranslation();
  return (
    <ResponsiveContainer width={"99%"} height={215}>
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
        <YAxis />
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
