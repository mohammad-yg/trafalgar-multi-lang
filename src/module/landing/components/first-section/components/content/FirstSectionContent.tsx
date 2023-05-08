import { FC } from "react";
import Button from "@/module/shared/buttons/Button";
import Link from "next/link";
import style from "./style.module.scss";
import { useAppTranslator } from "@/module/layout/core/layoutContext";

const FirstSectionContent: FC = () => {
  const appTranslator = useAppTranslator();

  return (
    <>
      <div className={style.box}>
        <h2>
          {appTranslator.translate(
            ["landing", "content"],
            "FirstSection.Title"
          )}
        </h2>
        <p>
          {appTranslator.translate(["landing", "content"], "FirstSection.Text")}
        </p>
        <Link href={"#"} className={style.buttonWrapper}>
          <Button style="fill">
            {appTranslator.translate(
              ["landing", "content"],
              "FirstSection.Button"
            )}
          </Button>
        </Link>
      </div>
    </>
  );
};

export default FirstSectionContent;
