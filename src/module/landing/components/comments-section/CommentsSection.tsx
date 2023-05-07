import { FC, useMemo, useState } from "react";
import Slide from "./components/slide/Slide";
import Pagination from "./components/pagination/Pagination";
import style from "./style.module.scss";
import Slider from "./components/slider/Slider";
import { toNext, toPrevious, toSlide } from "./services/slider";
import { getComments } from "./services/comments";
import { useAppTranslator } from "@/module/layout/core/layoutContext";

const slidesCount = 5;

const CommentsSection: FC = () => {
  const appTranslator = useAppTranslator();

  const [activeSlide, setActiveSlide] = useState(0);
  const comments = useMemo(() => {
    return getComments().data;
  }, []);

  const toNextHandler = () => {
    toNext(setActiveSlide);
  };
  const toPreviousHandler = () => {
    toPrevious(setActiveSlide);
  };
  const toSlideHandler = (index: number) => {
    toSlide(setActiveSlide, index);
  };

  return (
    <>
      <section className={style.section}>
        <div className={style.cardWrapper}>
          <div className={style.card}>
            <div className={style.titleWrapper}>
              <h3>{appTranslator.translate(['landing','content'],'CommentsSection.Title')}</h3>
              <span></span>
            </div>
            <div className={style.cardBackgroundElement}>
              <img src="/media/landing/svgs/element-2.svg" alt="background" />
            </div>
            <Slider slidesCount={slidesCount} activeSlide={activeSlide}>
              {comments.map((_) => (
                <Slide key={_.id} {..._} />
              ))}
            </Slider>
          </div>
          <div className={style.backgroundElement}>
            <img src="/media/landing/svgs/element.svg" alt="background" />
          </div>
        </div>
        <div className={style.pagination}>
          <Pagination
            toNext={toNextHandler}
            toPrevious={toPreviousHandler}
            toSlide={toSlideHandler}
            activeSlide={activeSlide}
            slidesCount={slidesCount}
          />
        </div>
      </section>
    </>
  );
};

export default CommentsSection;
