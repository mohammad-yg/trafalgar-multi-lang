import { FC } from "react";
import FirstSectionImage from "./components/image/FirstSectionImage";
import FirstSectionContent from "./components/content/FirstSectionContent";
import FirstSectionBackground from "./components/background/FirstSectionBackground";
import style from "./style.module.scss";

const FirstSection: FC = () => {
  return (
    <>
      <section className={style.section}>
        <FirstSectionContent />
        <FirstSectionImage />
        <FirstSectionBackground />
      </section>
    </>
  );
};

export default FirstSection;
