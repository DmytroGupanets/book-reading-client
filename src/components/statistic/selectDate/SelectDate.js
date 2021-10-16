import Select from "react-select";
import useDate from "../../../hooks/useDate";

import SelectDateStyled from "./SelectDateStyled";
import colors from "../../../styles/colors";
import sprite from "../../../images/sprite.svg";

const SelectDate = ({ date, setStatistic }) => {
  //   const [date, setDate] = useState(initialState);

  const [stateData] = useDate();
  const { quantityDays } = stateData;

  const onChange = (e) => {
    const value = e.value;

    setStatistic((prev) => ({ ...prev, date: value }));
  };

  const exactDays = quantityDays.map((day) => ({
    value: day,
    label: day,
  }));

  const options = [...exactDays.reverse()];

  return (
    <SelectDateStyled colors={colors}>
      <svg className="iconSelectDate">
        <use href={sprite + "#icon-selectDate"} />
      </svg>
      Дата
      <Select
        options={options}
        placeholder={"Selected"}
        classNamePrefix="reactSelect"
        value={options.filter(({ value }) => value === date)}
        components={{
          DropdownIndicator: () => null,
          IndicatorSeparator: () => null,
        }}
        theme={(theme) => ({
          ...theme,

          colors: {
            ...theme.colors,
            primary25: `${colors.lightColors.background}`,
            primary50: `${colors.lightColors.trainingLabel}`,
            primary: `${colors.lightColors.accent}`,
          },
        })}
        onChange={onChange}
      />
    </SelectDateStyled>
  );
};

export default SelectDate;
