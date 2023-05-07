import { FC } from "react";
import style from "./style.module.scss";
import Link from "next/link";
import { useAppTranslator } from "@/module/layout/core/layoutContext";

const Footer: FC = () => {
  const appTranslator = useAppTranslator();

  const columnLisnk = [
    ["Company", "About", "Testimonials", "Find_a_doctor", "Apps"],
    ["Region", "Indonesia", "Singapore", "Hongkong", "Canada"],
    ["Help", "Help_center", "Contact_support", "Instructions", "How_it_works"],
  ].map((column) =>
    column.map((_) => appTranslator.translate(["landing", "footer"], `Column_Links.${_}`))
  );

  console.log(columnLisnk);
  

  return (
    <>
      <footer className={style.footer}>
        <div className={style.container}>
          <div className={style.column1}>
            {/* logo */}
            <div className={style.logo}>
              <span>T</span>
              <span>Trafalgar</span>
            </div>
            <div className={style.content}>
              <p>
                {appTranslator.translate(["landing", "footer"], "About_us")}
              </p>
              <p>
                {appTranslator.translate(["landing", "footer"], "Copyright")}
              </p>
            </div>
          </div>

          {columnLisnk.map((_, columnIndex) => (
            <div key={columnIndex} className={style.column2}>
              <h6 className={style.title}>{_[0]}</h6>
              <ul className={style.list}>
                {_.map((item, index) => {
                  if (index === 0) return;
                  return (
                    <li className={style.item} key={columnIndex + "-" + index}>
                      <Link href={"#"}>{item}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
          <div className={style.backgroundElement}>
            <img src="/media/landing/svgs/element-2.svg" alt="background" />
          </div>
        </div>
        <div className={style.backgroundElement2}>
          <img src="/media/landing/svgs/element.svg" alt="background" />
        </div>
      </footer>
    </>
  );
};

export default Footer;
