import Slider from "react-slick";
import quotesIcon from "../../../images/auth/quotes.svg";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#F5F7FA" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#F5F7FA" }}
      onClick={onClick}
    />
  );
}

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const AuthSlider = () => {
  return (
    <div>
      <Slider {...settings}>
        <div>
          <svg className="quotesIcon" width="31" height="25">
            <use href={quotesIcon + "#icon-quotes"}></use>
          </svg>
          <p className="loginPageText">
            Книги — это корабли мысли, странствующие по волнам времени и бережно
            несущие свой драгоценный груз от поколения к поколению.
          </p>
          <p className="authorText">Бэкон Ф.</p>
        </div>
        <div>
          <svg className="quotesIcon" width="31" height="25">
            <use href={quotesIcon + "#icon-quotes"}></use>
          </svg>
          <p className="loginPageText">
            Книги — это корабли мысли, странствующие по волнам времени и бережно
            несущие свой драгоценный груз от поколения к поколению.
          </p>
          <p className="authorText">Бэкон Ф.</p>
        </div>
        <div>
          <svg className="quotesIcon" width="31" height="25">
            <use href={quotesIcon + "#icon-quotes"}></use>
          </svg>
          <p className="loginPageText">
            Книги — это корабли мысли, странствующие по волнам времени и бережно
            несущие свой драгоценный груз от поколения к поколению.
          </p>
          <p className="authorText">Бэкон Ф.</p>
        </div>
      </Slider>
    </div>
  );
};

export default AuthSlider;
