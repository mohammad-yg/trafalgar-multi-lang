import { WithChild } from "@/module/shared/_models";
import react from "react";
import style from "./style.module.scss";

type Prop = {
  slidesCount: number;
  activeSlide: number;
};

const Slider: react.FC<Prop & WithChild> = ({ children, slidesCount, activeSlide }) => {
  return (
    <>
      <div
        className={style.container}
        style={{
          width: `${slidesCount * 100}%`,
          right: `${activeSlide * 100}%`,
        }}
      >
        {children}
      </div>
    </>
  );
};

export default Slider;
