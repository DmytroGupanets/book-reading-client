import MyProgressListNormalStyled from "./MyProgressListNormalStyled";
import sprite from "../../../../../images/Training/sprite.svg";
import { ThemeContext } from "../../../../App";
import { useContext } from "react";
import { useTranslation } from "react-i18next";

const MyGoalListNormal = () => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  return (
    <MyProgressListNormalStyled colors={theme}>
      <ul className="goalListNorm_List">
        <li className="goalListNorm_List__Item">{t("Book title")}</li>
        <li className="goalListNorm_List__Item">{t("Author m")}</li>
        <li className="goalListNorm_List__Item">{t("Year")}</li>
        <li className="goalListNorm_List__Item">{t("Pages")}</li>
      </ul>
      <div className="goalListNorm_EmptyContainer">
        <svg className="goalListNorm_Svg">
          <use href={sprite + "#icon-Book"}></use>
        </svg>
        <p>...</p>
      </div>
    </MyProgressListNormalStyled>
  );
};

export default MyGoalListNormal;
