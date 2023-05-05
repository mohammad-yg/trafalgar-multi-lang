import { FC } from "react";
import { AppLang } from "../layout/core/_model";
import Layout from "../layout/Layout";
import Header from "./components/header/Header";
import style from "./style.module.scss";
import FirstSection from "./components/first-section/FirstSection";
import OurServcesSection from "./components/our-services-section/OurServcesSection";
import LeadingHealthcareSection from "./components/leading-healthcare-section/LeadingHealthcareSection";
import DownloadMobileAppSection from "./components/download-mobile-app-section/DownloadMobileAppSection";
import CommentsSection from "./components/comments-section/CommentsSection";

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
        </div>
      </Layout>
    </>
  );
};

export default Landing;
