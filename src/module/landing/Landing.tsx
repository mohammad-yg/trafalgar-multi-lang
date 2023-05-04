import { FC } from "react";
import { AppLang } from "../layout/core/_model";
import Layout from "../layout/Layout";
import Header from "./components/header/Header";
import style from "./style.module.scss";
import FirstSection from "./components/first-section/FirstSection";

type Prop = {
  lang: AppLang;
};

const Landing: FC<Prop> = ({ lang }) => {
  return (
    <>
      <Layout title="Landing" lang={lang}>
        <div className={style.container}>
          <Header />
          <FirstSection />
        </div>
      </Layout>
    </>
  );
};

export default Landing;
