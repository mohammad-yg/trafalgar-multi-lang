import { FC } from "react";
import SectionTitle from "@/module/shared/title/SectionTitle";
import Button from "@/module/shared/buttons/Button";
import { buttomArrow } from "@/module/shared/icons/arrows";
import style from "./style.module.scss";
import { useAppTranslator } from "@/module/layout/core/layoutContext";

const SectionContent: FC = () => {
  const appTranslator = useAppTranslator();

  return (
    <>
      <div className={style.contentWrapper}>
        <SectionTitle direction="ltr">
          {appTranslator.translate(
            ["landing", "content"],
            "DownloadMobileAppSection.Title"
          )}
        </SectionTitle>
        <div className={style.textWrapper}>
          <p>
            {appTranslator.translate(
              ["landing", "content"],
              "DownloadMobileAppSection.Text"
            )}
          </p>
        </div>
        <Button
          style="hollow"
          title={appTranslator.translate(
            ["landing", "content"],
            "DownloadMobileAppSection.Button"
          )}
          className={style.button}
        >
          <span className={style.buttonIcon}>{buttomArrow}</span>
        </Button>
      </div>
    </>
  );
};

export default SectionContent;
