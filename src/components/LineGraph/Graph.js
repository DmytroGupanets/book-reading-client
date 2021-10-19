import React from "react";
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
    ПЛАН: 30,
    ФАКТ: 29,
  },
  {
    ПЛАН: 40,
    ФАКТ: 40,
  },
  {
    ПЛАН: 67,
    ФАКТ: 56,
  },
];

const defaultData = [
  {
    ПЛАН: 0,
    ФАКТ: 0,
  },
];

export default function Graph() {
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
          dataKey="ПЛАН"
          stroke="#091E3F"
          strokeWidth={2}
          dot={{ r: 5 }}
          activeDot={{ r: 5 }}
        />
        <Line
          type="monotone"
          dataKey="ФАКТ"
          stroke="#FF6B08"
          strokeWidth={2}
          dot={{ r: 5 }}
          activeDot={{ r: 5 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
