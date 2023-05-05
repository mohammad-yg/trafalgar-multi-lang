import { FC } from "react";
import style from "./style.module.scss";
import SectionImage from "./section-image/SectionImage";
import SectionContent from "./section-content/SectionContent";
import SectionBackground from "./section-background/SectionBackground";

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
