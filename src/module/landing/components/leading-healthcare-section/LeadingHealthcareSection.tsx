import { FC } from "react";
import SectionImage from "./components/section-image/SectionImage";
import SectionContent from "./components/section-content/SectionContent";
import SectionBackground from "./components/section-background/SectionBackground";
import style from "./style.module.scss";

const LeadingHealthcareSection: FC = () => {
  return (
    <>
      <section className={style.section}>
        <SectionImage />
        <SectionContent />
        <SectionBackground />
      </section>
    </>
  );
};

export default LeadingHealthcareSection;
