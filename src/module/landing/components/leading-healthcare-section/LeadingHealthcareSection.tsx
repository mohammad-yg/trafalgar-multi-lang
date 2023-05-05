import { FC } from "react";
import style from "./style.module.scss";
import SectionImage from "./section-image/SectionImage";
import SectionContent from "./section-content/SectionContent";

const LeadingHealthcareSection: FC = () => {
  return (
    <>
      <section className={style.section}>
        <SectionImage />
        <SectionContent />
      </section>
    </>
  );
};

export default LeadingHealthcareSection;
