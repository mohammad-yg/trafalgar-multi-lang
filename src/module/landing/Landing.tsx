import { FC } from "react";
import { AppLang } from "../layout/core/_model";
import Layout from "../layout/Layout";
import Header from "./components/header/Header";
import FirstSection from "./components/first-section/FirstSection";
import OurServcesSection from "./components/our-services-section/OurServcesSection";
import LeadingHealthcareSection from "./components/leading-healthcare-section/LeadingHealthcareSection";
import DownloadMobileAppSection from "./components/download-mobile-app-section/DownloadMobileAppSection";
import CommentsSection from "./components/comments-section/CommentsSection";
import LastArticleSection from "./components/last-article-section/LastArticleSection";
import Footer from "./components/footer/Footer";
import style from "./style.module.scss";

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
          <OurServcesSection />
          <LeadingHealthcareSection />
          <DownloadMobileAppSection />
          <CommentsSection />
          <LastArticleSection />
        </div>

        <Footer />
      </Layout>
    </>
  );
};

export default Landing;
