import React, { useState } from "react";
import { ImageSliderData } from "./ImageSliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./ImageSlider.css";

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);

  const length = ImageSliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     const newCurrent = current > length - 1 ? 0 : current + 1;
  //     setCurrent(newCurrent);
  //   }, 5000);

  //   return () => clearTimeout(timer);
  // }, [current]);

  return (
    <section className="slider">
      <h2 className="slider-text">Lorem ipsum dolor sit.</h2>
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {ImageSliderData.map((slide, index) => {
        const { image } = slide;
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img className="slider-img" alt="" src={image} />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
