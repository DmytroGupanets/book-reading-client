import Select from "react-select";
import { useContext } from "react";
import { ThemeContext } from "../../App";
import SelectDateStyled from "./SelectDateStyled";
import sprite from "../../../images/sprite.svg";
import useDate from "../../../hooks/useDate";
import { useTranslation } from "react-i18next";

const SelectDate = ({ date, setStatistic }) => {
  const { theme } = useContext(ThemeContext);
  const [stateData] = useDate();
  const { quantityDays } = stateData;

  const { t } = useTranslation();

  const onChange = (e) => {
    const value = e.value;

    setStatistic((prev) => ({ ...prev, date: value }));
  };

  const optionDays = quantityDays.map((day) => ({
    value: day,
    label: day,
  }));

  const options = [...optionDays.reverse()];
  const colors = theme;

  return (
    <SelectDateStyled colors={theme}>
      <svg className="iconSelectDate">
        <use href={sprite + "#icon-selectDate"} />
      </svg>
      {t("Date")}
      <Select
        isSearchable={false}
        options={options}
        placeholder={"DD/MM/YYYY"}
        classNamePrefix="reactSelect"
        value={options.filter(({ value }) => value === date)}
        components={{
          DropdownIndicator: () => null,
          IndicatorSeparator: () => null,
          getValue: () => true,
        }}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary25: `${colors.inputBg}`,
            primary50: `${colors.inputFocus}`,
            primary: `${colors.accent}`,
          },
        })}
        onChange={onChange}
      />
    </SelectDateStyled>
  );
};

export default SelectDate;
