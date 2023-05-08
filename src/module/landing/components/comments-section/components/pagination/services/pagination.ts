type ToSlide = (index: number) => void;

const toSlide = (activeSlide: number, toSlide: ToSlide, index: number) => {
  if (index !== activeSlide) toSlide(index);
};

type ToNext = () => void;

const toNext = (slidesCount: number, activeSlide: number, toNext: ToNext) => {
  if (slidesCount - 1 !== activeSlide) toNext();
};

type ToPrevious = () => void;

const toPrevious = (activeSlide: number, toPrevious: ToPrevious) => {
  if (activeSlide !== 0) toPrevious();
};

export { toNext, toPrevious, toSlide };
