import { FC, useEffect } from "react";
import style from "./style.module.scss";
import { WithClassName } from "../_models";

type Prop = {
  style: "hollow" | "fill";
  title: string;
  onClick?: () => void;
};

const Button: FC<Prop & WithClassName> = ({
  style: propStyle,
  title,
  onClick,
  className,
}) => {

  return (
    <>
      <div onClick={onClick} className={`${style.button} ${style[propStyle]} ${className}`}>
        {title}
      </div>
    </>
  );
};

export default Button;
