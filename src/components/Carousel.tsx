import s from "./../styles/Carousel.module.css";
import { ChevronLeft, ChevronRight } from "react-feather";
import { useState } from "react";

type ImagesProps = {
  img: string[];
};

const Carousel = ({ img }: ImagesProps) => {
  const [imageIndex, setImageIndex] = useState(0);

  function next() {
    setImageIndex((index) => {
      if (index === 0) return img.length - 1;
      return index - 1;
    });
  }

  function prev() {
    setImageIndex((index) => {
      if (index === img.length - 1) return 0;
      return index + 1;
    });
  }

  return (
    <div className={s.imgBoxRoot}>
      <div className={s.imgBoxMap}>
        {img.map((el) => {
          return (
            <img
              src={el}
              key={el}
              className={s.imgSlider}
              style={{ translate: `${-100 * imageIndex}%` }}
            />
          );
        })}
      </div>
      <div onClick={prev} className={s.btnSliderPrev}>
        <ChevronLeft />
      </div>
      <div onClick={next} className={s.btnSliderNext}>
        <ChevronRight />
      </div>
    </div>
  );
};

export default Carousel;
