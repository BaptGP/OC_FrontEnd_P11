import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import "../assets/css/Slider.css";

function ImageSlider({ data }) {
  const [current, setCurrent] = useState(0);
  const length = data.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(data) || data.length <= 0) {
    return null;
  } else if (data.length === 1) {
    return (
      <section className="slider">
        {data.map((item, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <img
                  src={item}
                  alt={`appartement ${index}`}
                  className="image"
                />
              )}
            </div>
          );
        })}
      </section>
    );
  } else {
    return (
      <section className="slider">
        <FontAwesomeIcon
          icon={solid("chevron-left")}
          className="left-arrow"
          onClick={prevSlide}
        />
        <FontAwesomeIcon
          icon={solid("chevron-right")}
          className="right-arrow"
          onClick={nextSlide}
        />
        {data.map((item, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <img
                  src={item}
                  alt={`appartement ${index}`}
                  className="image"
                />
              )}
            </div>
          );
        })}
      </section>
    );
  }
}

export default ImageSlider;
