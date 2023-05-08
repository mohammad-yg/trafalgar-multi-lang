import { FC } from "react";
import style from "./style.module.scss";
import { leftArrow, rightArrow } from "@/module/shared/icons/arrows";
import { toNext, toPrevious, toSlide } from "./services/pagination";

type Prop = {
  toNext: () => void;
  toPrevious: () => void;
  toSlide: (index: number) => void;
  activeSlide: number;
  slidesCount: number;
};

const Pagination: FC<Prop> = ({
  toNext: propToNext,
  toPrevious: propToPrevious,
  toSlide: propToSlide,
  activeSlide,
  slidesCount,
}) => {
  const items = [];
  for (let i = 0; i < slidesCount; i++) {
    items.push(
      <span
        key={i}
        className={`${style.paginationBtn} ${
          i === activeSlide && style.active
        }`}
        onClick={() => toSlideHandler(i)}
      ></span>
    );
  }

  const toSlideHandler = (index: number) => {
    toSlide(activeSlide, propToSlide, index);
  };

  const toNextHandler = () => {
    toNext(slidesCount, activeSlide, propToNext);
  };

  const toPreviousHandler = () => {
    toPrevious(activeSlide, propToPrevious);
  };

  return (
    <>
      <div className={style.wrapper}>
        <div
          className={`${style.icon} ${style.toLeft} 
          ${activeSlide !== 0 && style.active}`}
          onClick={toPreviousHandler}
        >
          {leftArrow}
        </div>
        <div className={style.paginationWrapper}>{items}</div>
        <div
          className={`${style.icon} ${style.toRight} ${
            activeSlide !== slidesCount - 1 && style.active
          }`}
          onClick={toNextHandler}
        >
          {rightArrow}
        </div>
      </div>
    </>
  );
};

export default Pagination;
