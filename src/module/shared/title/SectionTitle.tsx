import { FC } from "react";
import { WithChild } from "../_models";
import style from './style.module.scss'

const SectionTitle: FC<WithChild> = ({ children }) => {
  return (
    <>
      <h2 className={style.title}>{children}</h2>
      <div className={style.line}></div>
    </>
  );
};

export default SectionTitle;
