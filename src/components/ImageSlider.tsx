import { useState } from "react";
import "../style/components/ImageSlider.scss";

import ArrowLeft from "../assets/feather/arrow-left.svg";
import ArrowRight from "../assets/feather/arrow-right.svg";
import CircleDot from "../assets/feather/circle.svg";
import Circle from "../assets/feather/disc.svg";

import image1 from "../assets/image-slider/slide1.png";
import image2 from "../assets/image-slider/slide2.png";

const SLIDER = [image1, image2];

export default function ImageSlider() {
  const [imageIndex, setImageIndex] = useState(0);

  function showNextImage() {
    setImageIndex((index) => {
      if (index === SLIDER.length - 1) return 0;
      return index + 1;
    });
  }

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return SLIDER.length - 1;
      return index - 1;
    });
  }
  return (
    <>
      <div className="img-slider">
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            overflow: "hidden",
          }}
        >
          {SLIDER.map((url) => (
            <img
              key={url}
              src={url}
              className="img-slider-img"
              style={{ translate: `${-100 * imageIndex}%` }}
            />
          ))}
        </div>
        <button
          onClick={showPrevImage}
          className="img-slider-btn"
          style={{ left: 0 }}
          aria-label="Ver Imagem Anterior"
        >
          <img src={ArrowLeft}/>
        </button>
        <button
          onClick={showNextImage}
          className="img-slider-btn"
          style={{ right: 0 }}
          aria-label="Ver Próxima Imagem"
        >
          <img src={ArrowRight} />
        </button>
        <div
          style={{
            position: "absolute",
            left: "50%",
            marginLeft: "auto",
            marginRight: "auto",
            bottom: "1rem",
            width: "100%",
            display: "flex",
            gap: "0.25rem",
          }}
        >
          {SLIDER.map((_, index) => (
            <button
              key={index}
              className="img-slider-dot-btn"
              aria-label={`Ver Imagem ${index}`}
              onClick={() => setImageIndex(index)}
            >
              {index === imageIndex ? (
                <img src={Circle}/>
              ) : (
                <img src={CircleDot}/>
              )}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
