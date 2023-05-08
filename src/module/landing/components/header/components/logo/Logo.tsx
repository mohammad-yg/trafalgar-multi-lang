import { FC } from "react";
import style from "./style.module.scss";

const Logo: FC = () => {
  return (
    <>
      <div className={style.wrapper}>
        <div className={style.logo}><span>T</span></div>
        <div className={style.text}>Trafalgar</div>
      </div>
    </>
  );
};

export default Logo;
