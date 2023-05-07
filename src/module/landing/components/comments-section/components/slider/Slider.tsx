import { WithChild } from "@/module/shared/_models";
import react from "react";
import style from "./style.module.scss";

type Prop = {
  count: number;
  activeSlide: number;
};

const Slider: react.FC<Prop & WithChild> = ({ children, count, activeSlide }) => {
  return (
    <>
      <div
        className={style.container}
        style={{
          width: `${count * 100}%`,
          right: `${activeSlide * 100}%`,
        }}
      >
        {children}
      </div>
    </>
  );
};

export default Slider;
