import { FC } from "react";
import SectionImage from "./components/image/SectionImage";
import SectionContent from "./components/content/SectionContent";
import style from "./style.module.scss";

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
