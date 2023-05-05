import { FC } from "react";
import { WithChild } from "../_models";
import style from "./style.module.scss";

type Prop = {
  direction: "center" | "rtl" | "ltr";
};

const SectionTitle: FC<Prop & WithChild> = ({ children, direction }) => {
  return (
    <>
      <div className={`${style.wrapper} ${style[direction]}`}>
        <h2 className={style.title}>{children}</h2>
        <div className={style.line}></div>
      </div>
    </>
  );
};

export default SectionTitle;
