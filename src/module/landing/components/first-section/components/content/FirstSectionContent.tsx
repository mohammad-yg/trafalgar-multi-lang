import { FC } from "react";
import Button from "@/module/shared/buttons/Button";
import Link from "next/link";
import style from "./style.module.scss";

const FirstSectionContent: FC = () => {
  return (
    <>
      <div className={style.box}>
        <h2>Virtual healthcare for you</h2>
        <p>
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone
        </p>
        <Link href={'#'} className={style.buttonWrapper}>
          <Button title="Consult today" style="fill" />
        </Link>
      </div>
    </>
  );
};

export default FirstSectionContent;
