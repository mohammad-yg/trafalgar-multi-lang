import { FC } from "react";
import SectionTitle from "@/module/shared/title/SectionTitle";
import Button from "@/module/shared/buttons/Button";
import style from "./style.module.scss";
import { useAppTranslator } from "@/module/layout/core/layoutContext";

const SectionContent: FC = () => {
  const appTranslator = useAppTranslator();

  return (
    <>
      <div className={style.wrapper}>
        <SectionTitle direction="ltr">
          {appTranslator.translate(
            ["landing", "content"],
            "LeadingHealthcareSection.Title"
          )}
        </SectionTitle>
        <div className={style.text}>
          <p>
            {appTranslator.translate(
              ["landing", "content"],
              "LeadingHealthcareSection.Text"
            )}
          </p>
        </div>
        <div className={style.buttonWrapper}>
          <Button title=
            {appTranslator.translate(
              ["landing", "content"],
              "LeadingHealthcareSection.Button"
            )}
           style="hollow" className={style.button} />
        </div>
      </div>
    </>
  );
};

export default SectionContent;
