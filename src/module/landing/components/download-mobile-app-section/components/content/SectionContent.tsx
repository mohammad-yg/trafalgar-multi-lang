import { FC } from "react";
import SectionTitle from "@/module/shared/title/SectionTitle";
import Button from "@/module/shared/buttons/Button";
import { buttomArrow } from "@/module/shared/icons/arrows";
import style from "./style.module.scss";

const SectionContent: FC = () => {
  return (
    <>
      <div className={style.contentWrapper}>
        <SectionTitle direction="ltr">Download our mobile apps</SectionTitle>
        <div className={style.textWrapper}>
          <p>
            Our dedicated patient engagement app and web portal allow you to
            access information instantaneously (no tedeous form, long calls, or
            administrative hassle) and securely
          </p>
        </div>
        <Button style="hollow" title="Download" className={style.button}>
          <span className={style.buttonIcon}>{buttomArrow}</span>
        </Button>
      </div>
    </>
  );
};

export default SectionContent;
