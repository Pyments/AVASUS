import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight, CircleDot, Circle } from "lucide-react";
import "../style/components/ImageSlider.scss";

//@ts-ignore
import image1 from "../assets/image-slider/slide1.png";
//@ts-ignore
import image2 from "../assets/image-slider/slide1.png";

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
          <ArrowBigLeft />
        </button>
        <button
          onClick={showNextImage}
          className="img-slider-btn"
          style={{ right: 0 }}
          aria-label="Ver Próxima Imagem"
        >
          <ArrowBigRight />
        </button>
        <div
          style={{
            position: "absolute",
            bottom: "0.6rem",
            left: "-50%",
            translate: "100%",
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
              {index === imageIndex ? <CircleDot /> : <Circle />}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
