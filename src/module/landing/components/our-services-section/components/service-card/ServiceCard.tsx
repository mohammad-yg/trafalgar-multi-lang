import { FC } from "react";
import style from "./style.module.scss";

type Prop = {
  icon: string;
  title: string;
  description: string;
};

const ServiceCard: FC<Prop> = ({ icon, description, title }) => {
  return (
    <>
      <div className={style.cardWrapper}>
        <div className={style.card}>
          <img src={icon} className={style.icon} alt="icon" />
          <h5 className={style.title}>{title}</h5>
          <p className={style.description}>{description}</p>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
