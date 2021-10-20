import Slider from "react-slick";
import quotesIcon from "../../../images/auth/quotes.svg";
import quotesUA from "../../quotes/ua/quotesUA.json";

function SampleNextArrow(props) {
  const { onClick } = props;
  return <button className="slick-next slick-arrow" onClick={onClick}></button>;
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <button className="slick-prev slick-arrow" onClick={onClick}></button>
    // <div
    //   className={className}
    //   style={{
    //     ...style,
    //     width: 23,
    //     height: 23,
    //     display: "block",
    //     background: "#F5F7FA",
    //   }}
    //   onClick={onClick}
    // />
  );
}

const settings = {
  dots: false,
  infinite: true,
  speed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 10000,
  cssEase: "linear",
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const AuthSlider = () => {
  return (
    <div>
      <Slider {...settings}>
        {quotesUA.map((quote) => (
          <div className="sliderContainer" key={quote.id}>
            <svg className="quotesIcon" width="31" height="25">
              <use href={quotesIcon + "#icon-quotes"}></use>
            </svg>
            <p className="loginPageText">{quote.quote}</p>
            <p className="authorText">{quote.author}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AuthSlider;

// <div>
//   <svg className="quotesIcon" width="31" height="25">
//     <use href={quotesIcon + "#icon-quotes"}></use>
//   </svg>
//   <p className="loginPageText">
//     Книги — это корабли мысли, странствующие по волнам времени и бережно несущие
//     свой драгоценный груз от поколения к поколению.
//   </p>
//   <p className="authorText">Бэкон Ф.</p>
// </div>;
