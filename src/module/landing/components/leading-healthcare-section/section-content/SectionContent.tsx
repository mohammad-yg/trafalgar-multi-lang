import { FC } from "react";
import SectionTitle from "@/module/shared/title/SectionTitle";
import style from "./style.module.scss";
import Button from "@/module/shared/buttons/Button";

const SectionContent: FC = () => {
  return (
    <>
      <div className={style.wrapper}>
        <SectionTitle direction="ltr">
          Leading healthcare providers
        </SectionTitle>
        <div className={style.text}>
          <p>
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone. To us, it’s not just
            work. We take pride in the solutions we deliver
          </p>
        </div>
        <div className={style.buttonWrapper}>
          <Button title="Learn more" style="hollow" className={style.button} />
        </div>
      </div>
    </>
  );
};

export default SectionContent;
