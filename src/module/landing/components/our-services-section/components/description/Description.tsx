import { FC } from "react";
import style from "./style.module.scss";
import { useAppTranslator } from "@/module/layout/core/layoutContext";

const Description: FC = () => {
  const appTranslator = useAppTranslator();

  return (
    <>
      <p className={style.descriptiton}>
        {appTranslator.translate(
          ["landing", "content"],
          "OurServcesSection.Text"
        )}
      </p>
    </>
  );
};

export default Description;
