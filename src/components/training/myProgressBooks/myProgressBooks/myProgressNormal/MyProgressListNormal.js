import MyProgressListNormalItem from "./myProgressListItemNormal/MyProgressListItemNormal";
import MyProgressListNormalStyled from "./MyProgressListNormalStyled";
import { ThemeContext } from "../../../../App";
import { useContext } from "react";
import { useTranslation } from "react-i18next";

const MyProgressListNormal = ({ data, onClickDelete }) => {
  const { t } = useTranslation();

  const { theme } = useContext(ThemeContext);

  return (
    <MyProgressListNormalStyled colors={theme}>
      <ul className="myGoalListNorm_ListHead">
        <li className="myGoalListNorm_item">{t("Book title")}</li>
        <li className="myGoalListNorm_item">{t("Author m")}</li>
        <li className="myGoalListNorm_item">{t("Year m")}</li>
        <li className="myGoalListNorm_item">{t("Pages")}</li>
      </ul>
      <ul className="myGoalListNorm_ListBooks">
        {data.map((item, idx) => (
          <MyProgressListNormalItem
            idx={idx}
            item={item}
            key={item._id}
            onClickDelete={onClickDelete}
          />
        ))}
      </ul>
    </MyProgressListNormalStyled>
  );
};

export default MyProgressListNormal;
