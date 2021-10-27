import BackToTopButton from "./BackToTopButton";
import arrowIcon from "../../images/auth/arrow.svg";

const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <BackToTopButton onClick={scrollToTop} type="button">
      <svg className="arrowIcon" width="20" height="20">
        <use href={arrowIcon + "#icon-arrowToTop"}></use>
      </svg>
    </BackToTopButton>
  );
};

export default BackToTop;
