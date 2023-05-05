import { FC } from "react";
import style from "./style.module.scss";
import SectionImage from "./components/image/SectionImage";
import SectionContent from "./components/content/SectionContent";

const DownloadMobileAppSection: FC = () => {
  return (
    <>
      <section className={style.section}>
        <SectionContent />
        <SectionImage />
      </section>
    </>
  );
};

export default DownloadMobileAppSection;
