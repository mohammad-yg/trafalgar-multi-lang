import { FC, useContext } from "react";
import SectionTitle from "@/module/shared/title/SectionTitle";
import ArticleCard from "./components/article-card/ArticleCard";
import Button from "@/module/shared/buttons/Button";
import style from "./style.module.scss";
import {
  LayoutCotnext,
} from "@/module/layout/core/layoutContext";
import { getArticles } from "./services/articles";

const LastArticleSection: FC = () => {
  const { lang, appTranslator } = useContext(LayoutCotnext);
  const data = getArticles(lang).data;

  return (
    <>
      <section className={style.section}>
        <SectionTitle direction="center">
          {appTranslator.translate(
            ["landing", "content"],
            "LastArticleSection.Title"
          )}
        </SectionTitle>
        <div className={style.articleWrapper}>
          {data.map((_) => (
            <ArticleCard
              image={_.image}
              link={_.link}
              text={_.text}
              title={_.title}
            />
          ))}
        </div>
        <Button style="hollow" className={style.button}>
          {appTranslator.translate(
            ["landing", "content"],
            "LastArticleSection.Button"
          )}
        </Button>
        <div className={style.background}>
          <img
            className={style.backgroundElement}
            src="/media/landing/svgs/element.svg"
            alt="background"
          />
        </div>
        <div className={style.background2}>
          <img
            className={style.backgroundElement}
            src="/media/landing/svgs/background-2.svg"
            alt="background"
          />
        </div>
      </section>
    </>
  );
};

export default LastArticleSection;
