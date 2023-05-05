import { FC } from "react";
import style from "./style.module.scss";
import SectionTitle from "@/module/shared/title/SectionTitle";
import ArticleCard from "./components/article-card/ArticleCard";
import Button from "@/module/shared/buttons/Button";

const LastArticleSection: FC = () => {
  return (
    <>
      <section className={style.section}>
        <SectionTitle direction="center">
          Check out our latest article
        </SectionTitle>
        <div className={style.articleWrapper}>
          <ArticleCard
            image="/media/landing/images/article-1.jpg"
            link=""
            text="In this case, the role of the health laboratory is very important to do a disease detection..."
            title="Disease detection, check up in the laboratory"
          />
          <ArticleCard
            image="/media/landing/images/article-2.jpg"
            link=""
            text="Herbal medicine is very widely used at this time because of its very good for your health..."
            title="Herbal medicines that are safe for consumption"
          />
          <ArticleCard
            image="/media/landing/images/article-3.jpg"
            link=""
            text="A healthy lifestyle should start from now and also for your skin health. There are some..."
            title="Natural care for healthy facial skin"
          />
        </div>
        <Button title="View all" style="hollow" className={style.button}/>
        <div className={style.background}>
            <img className={style.backgroundElement} src="/media/landing/svgs/element.svg" alt="background"/>
        </div>
        <div className={style.background2}>
            <img className={style.backgroundElement} src="/media/landing/svgs/background-2.svg" alt="background"/>
        </div>
      </section>
    </>
  );
};

export default LastArticleSection;
