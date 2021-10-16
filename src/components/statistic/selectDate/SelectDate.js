import Select from "react-select";
import useDate from "../../../hooks/useDate";

import SelectDateStyled from "./SelectDateStyled";
import colors from "../../../styles/colors";
import sprite from "../../../images/sprite.svg";

const SelectDate = ({ setStatistic }) => {
  //   const [date, setDate] = useState(initialState);

  const [stateData, setCurrentData, setCurrentTime, setQuantityBetweenDays] =
    useDate();
  const { currentDate, quantityDays, currentTime } = stateData;

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
        classNamePrefix="reactSelect"
        // defaultValue={options[3]}
        // isSearchable={false}
        options={options}
        placeholder={currentDate.split("-").join(".")}
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
