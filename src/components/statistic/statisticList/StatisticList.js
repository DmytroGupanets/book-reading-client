import StatisticListStyled from "./StatisticListStyled";

const arr = [
  { date: "10.10.2021", time: "18:10:23", str: "32" },
  { date: "10.10.2021", time: "18:10:23", str: "32" },
  { date: "10.10.2021", time: "18:10:23", str: "32" },
  { date: "10.10.2021", time: "18:10:23", str: "32" },
  { date: "10.10.2021", time: "18:10:23", str: "32" },
];

const StatisticList = () => {
  return (
    <StatisticListStyled>
      <h3 className="statisticTitle">Статистика</h3>

      {arr.map(({ date, time, str }) => (
        <ul className="statisticList">
          <li className="statisticListItem">{date}</li>
          <li className="statisticListItemTime">{time}</li>
          <li className="statisticListItemWrapper">
            {str}
            <p className="statisticListItemTime">стор.</p>
          </li>
        </ul>
      ))}
    </StatisticListStyled>
  );
};

export default StatisticList;
