import arrowIcon from "../../../images/auth/arrow.svg";
import RegistrationForm from "../RegistrationForm/RegistrationForm";

const Registration = () => {
  return (
    <div className="authContainer">
      <div className="leftSideContainer">
        <RegistrationForm />
      </div>
      <div className="rightSideContainer">
        <div>
          <h2>Books Reading</h2>
          <p>Допоможе вам</p>
          <ul>
            <li>
              <svg className="arrowIcon" width="5" height="10">
                <use href={arrowIcon + "#icon-arrow"}></use>
              </svg>
              Швидше сформулювати свою ціль і розпочати читати
            </li>
            <li>
              <svg className="arrowIcon" width="5" height="10">
                <use href={arrowIcon + "#icon-arrow"}></use>
              </svg>
              Пропорційно розподілити навантаження на кожний день
            </li>
            <li>
              <svg className="arrowIcon" width="5" height="10">
                <use href={arrowIcon + "#icon-arrow"}></use>
              </svg>
              Відстежувати особистий успіх
            </li>
          </ul>
          <p>Також ви зможете</p>
          <ul>
            <li>
              <svg className="arrowIcon" width="5" height="10">
                <use href={arrowIcon + "#icon-arrow"}></use>
              </svg>
              Формувати особисту думку незалежну від інших
            </li>
            <li>
              <svg className="arrowIcon" width="5" height="10">
                <use href={arrowIcon + "#icon-arrow"}></use>
              </svg>
              Підвищити свої професійні якості опираючись на нові знання
            </li>
            <li>
              <svg className="arrowIcon" width="5" height="10">
                <use href={arrowIcon + "#icon-arrow"}></use>
              </svg>
              Стати цікавим співрозмовником
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Registration;
