import { FC } from "react";
import style from "./style.module.scss";

const SectionBackground: FC = () => {
  return (
    <>
      <div className={style.background}>
        <img src="/media/landing/svgs/element.svg" alt="background" />
      </div>
    </>
  );
};

export default SectionBackground;
