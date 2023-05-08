import { FC } from "react";
import style from "./style.module.scss";

const SectionImage: FC = () => {
  return (
    <>
    <div className={style.imageWrappper}>
      <img src="/media/landing/images/trafalgar-illustration sec03 1.png" alt="use mobile app"/>
    </div>
    </>
  );
};

export default SectionImage;
