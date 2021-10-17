import StatisticForm from "./statisticForm/StatisticForm";
import StatisticList from "./statisticList/StatisticList";
import StatisticModal from "./statisticModal/StatisticModal";
import StatisticStyled from "./StatisticStyled";

const Statistic = () => {
  return (
    <StatisticStyled>
      <StatisticForm />
      <StatisticList />
      <StatisticModal />
    </StatisticStyled>
  );
};

export default Statistic;
