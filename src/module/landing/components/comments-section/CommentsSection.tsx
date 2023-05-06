import { FC } from "react";
import Slide from "./components/slide/Slide";
import Pagination from "./components/pagination/Pagination";
import style from "./style.module.scss";

const CommentsSection: FC = () => {
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
            <Slide
              profile="/media/landing/images/image 1.png"
              comment="Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely"
              name="Edward Newgate"
              jobPosition="Founder Circle"
            />
          </div>
          <div className={style.backgroundElement}>
            <img src="/media/landing/svgs/element.svg" alt="background" />
          </div>
        </div>
        <div className={style.pagination}>
          <Pagination />
        </div>
      </section>
    </>
  );
};

export default CommentsSection;
