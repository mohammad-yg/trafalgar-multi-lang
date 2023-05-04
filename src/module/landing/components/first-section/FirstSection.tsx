import { FC } from "react";

import style from "./style.module.scss";
import FirstSectionImage from "./components/image/FirstSectionImage";
import FirstSectionContent from "./components/content/FirstSectionContent";

const FirstSection: FC = () => {
  return (
    <>
      <section className={style.section}>
        <FirstSectionContent />
        <FirstSectionImage />
      </section>
    </>
  );
};

export default FirstSection;
