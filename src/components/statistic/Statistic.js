import StatisticForm from "./statisticForm/StatisticForm";
import StatisticList from "./statisticList/StatisticList";

import StatisticStyled from "./StatisticStyled";

const Statistic = () => {
  return (
    <StatisticStyled>
      <StatisticForm />
      <StatisticList />
    </StatisticStyled>
  );
};

export default Statistic;
