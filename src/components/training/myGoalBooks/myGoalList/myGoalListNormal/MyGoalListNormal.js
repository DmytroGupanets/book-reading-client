import MyGoalListNormalItem from "./myGoalListItemNormal/MyGoalListItemNormal";
import MyGoalListNormalStyled from "./MyGoalListNormalStyled";
import spite from "../../../../../images/Training/sprite.svg";
import { ThemeContext } from "../../../../App";
import { useContext } from "react";
import { useTranslation } from "react-i18next";

const MyGoalListNormal = ({ data, onClickDelete }) => {
  const { t } = useTranslation();

  const { theme } = useContext(ThemeContext);

  return (
    <MyGoalListNormalStyled colors={theme}>
      <ul className="myGoalListNorm_ListHead">
        <li className="myGoalListNorm_item">{t("Book title")}</li>
        <li className="myGoalListNorm_item">{t("Author m")}</li>
        <li className="myGoalListNorm_item">{t("Year")}</li>
        <li className="myGoalListNorm_item">{t("Pages")}</li>
      </ul>
      <ul className="myGoalListNorm_ListBooks">
        {data.map((item) => (
          <MyGoalListNormalItem
            item={item}
            key={item._id}
            onClickDelete={onClickDelete}
          />
        ))}
        <div className="myGoalListNorm_MoreBooksContainer">
          <svg className="myGoalListNorm_SvgBook">
            <use href={spite + "#icon-Book"}></use>
          </svg>
          <p className="myGoalListNorm_Points">...</p>
        </div>
      </ul>
    </MyGoalListNormalStyled>
  );
};

export default MyGoalListNormal;
