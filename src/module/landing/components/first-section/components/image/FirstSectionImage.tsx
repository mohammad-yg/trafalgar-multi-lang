import { FC } from "react";
import style from './style.module.scss'

const FirstSectionImage: FC = () => {
  return (
    <>
      <img
        src="/media/landing/images/trafalgar-header illustration 1.png"
        alt=""
        className={style.image}
      />
    </>
  );
};

export default FirstSectionImage;
