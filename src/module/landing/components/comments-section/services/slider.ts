import { Dispatch, SetStateAction } from "react";

type SetActiveSlide = Dispatch<SetStateAction<number>>;

const toNext = (setActiveSlide: SetActiveSlide) => {
  setActiveSlide((prev) => ++prev);
};

const toPrevious = (setActiveSlide: SetActiveSlide) => {
  setActiveSlide((prev) => --prev);
};

const toSlide = (setActiveSlide: SetActiveSlide, index: number) => {
  setActiveSlide(index);
};

export { toNext, toPrevious, toSlide };
