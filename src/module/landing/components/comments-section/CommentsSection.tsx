import { FC, useState } from "react";
import Slide from "./components/slide/Slide";
import Pagination from "./components/pagination/Pagination";
import style from "./style.module.scss";
import Slider from "./components/slider/Slider";

const CommentsSection: FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const toNext = () => {
    setActiveSlide((prev) => ++prev)
  };
  const toPrevious = () => {
    setActiveSlide((prev) => --prev)
  };

  const toSlide = (index: number) => {
    setActiveSlide(index)
  };

  return (
    <>
      <section className={style.section}>
        <div className={style.cardWrapper}>
          <div className={style.card}>
            <div className={style.titleWrapper}>
              <h3>What our customer are saying</h3>
              <span></span>
            </div>
            <div className={style.cardBackgroundElement}>
              <img src="/media/landing/svgs/element-2.svg" alt="background" />
            </div>
            <Slider count={4} activeSlide={activeSlide}>
              <Slide
                profile="/media/landing/images/image 1.png"
                comment="Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely"
                name="Edward Newgate 1"
                jobPosition="Founder Circle"
              />
              <Slide
                profile="/media/landing/images/image 1.png"
                comment="Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely"
                name="Edward Newgate 2"
                jobPosition="Founder Circle"
              />
              <Slide
                profile="/media/landing/images/image 1.png"
                comment="Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely"
                name="Edward Newgate 3"
                jobPosition="Founder Circle"
              />
              <Slide
                profile="/media/landing/images/image 1.png"
                comment="Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely"
                name="Edward Newgate 4"
                jobPosition="Founder Circle"
              />
            </Slider>
          </div>
          <div className={style.backgroundElement}>
            <img src="/media/landing/svgs/element.svg" alt="background" />
          </div>
        </div>
        <div className={style.pagination}>
          <Pagination toNext={toNext} toPrevious={toPrevious} toSlide={toSlide} activeSlide={activeSlide} slidsCount={4}/>
        </div>
      </section>
    </>
  );
};

export default CommentsSection;
