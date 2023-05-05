import { FC } from "react";
import style from "./style.module.scss";
import { leftArrow, rightArrow } from "@/module/shared/icons/arrows";

const Pagination: FC = () => {
  return (
    <>
      <div className={style.wrapper}>
        <div className={`${style.icon} ${style.toLeft}`}>
          {leftArrow}
        </div>
        <div className={style.paginationWrapper}>
          <span className={`${style.paginationBtn} ${style.active}`}></span>
          <span className={style.paginationBtn}></span>
          <span className={style.paginationBtn}></span>
          <span className={style.paginationBtn}></span>
        </div>
        <div className={`${style.icon} ${style.toRight} ${style.active}`}>
          {rightArrow}
        </div>
      </div>
    </>
  );
};

export default Pagination;
