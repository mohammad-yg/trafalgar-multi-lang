import { FC } from "react";
import Link from "next/link";
import { rightArrow } from "@/module/shared/icons/arrows";
import style from "./style.module.scss";

type Prop = {
  image: string;
  title: string;
  text: string;
  link: string;
};

const ArticleCard: FC<Prop> = ({ image, link, text, title }) => {
  return (
    <>
      <div className={style.card}>
        <div className={style.imageWrapper}>
          <img src={image} alt={image} />
        </div>
        <div className={style.contentWrapper}>
          <div className={style.content}>
            <div>
              <h5>{title}</h5>
              <p>{text}</p>
            </div>
          </div>
          <Link className={style.link} href={link}>
            <span>Read more</span>
            <span className={style.icon}>{rightArrow}</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ArticleCard;
