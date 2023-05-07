import { FC } from "react";
import style from "./style.module.scss";
import { leftArrow, rightArrow } from "@/module/shared/icons/arrows";

type Prop = {
  toNext: () => void;
  toPrevious: () => void;
  toSlide: (index: number) => void;
  activeSlide: number;
  slidsCount: number;
};

const Pagination: FC<Prop> = ({
  toNext,
  toPrevious,
  toSlide,
  activeSlide,
  slidsCount,
}) => {
  const items = [];
  for (let i = 0; i < slidsCount; i++) {
    items.push(
      <span
        className={`${style.paginationBtn} ${
          i === activeSlide ? style.active : ""
        }`}
        onClick={() => toSlideHandler(i)}
      ></span>
    );
  }

  const toSlideHandler = (index: number) => {
    if (index !== activeSlide) toSlide(index);
  };

  const toNextHandler = () => {
    if ((slidsCount - 1) !== activeSlide) toNext();
  };

  const toPreviousHandler = () => {
    if (activeSlide !== 0) toPrevious();
  };

  return (
    <>
      <div className={style.wrapper}>
        <div
          className={`${style.icon} ${style.toLeft} 
          ${activeSlide !== 0 ? style.active : ""}`}
          onClick={toPreviousHandler}
        >
          {leftArrow}
        </div>
        <div className={style.paginationWrapper}>{items}</div>
        <div
          className={`${style.icon} ${style.toRight} ${
            activeSlide !== (slidsCount - 1) ? style.active : ""
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
