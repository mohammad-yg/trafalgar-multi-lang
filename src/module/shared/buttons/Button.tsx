import { FC, useEffect } from "react";
import style from "./style.module.scss";
import { WithChild, WithClassName } from "../_models";

type Prop = {
  style: "hollow" | "fill";
  title: string;
  onClick?: () => void;
};

const Button: FC<Prop & WithClassName & WithChild> = ({
  style: propStyle,
  title,
  onClick,
  className,
  children
}) => {

  return (
    <>
      <div onClick={onClick} className={`${style.button} ${style[propStyle]} ${className}`}>
        {title}{children}
      </div>
    </>
  );
};

export default Button;
