import { FC, useContext } from "react";
import style from "./style.module.scss";
import { LayoutCotnext } from "@/module/layout/core/layoutContext";
import Link from "next/link";

const Navbar: FC = () => {
  const activeItem = "Home";
  const { lang, appTranslator } = useContext(LayoutCotnext);
  const items = [
    "Home",
    "Find_a_doctor",
    "Apps",
    "Testimonials",
    "About_us",
  ].map((_) => appTranslator.translate(["landing", "header"], _));
  return (
    <>
      <ul className={style.list}>
        {items.map((_, index) => (
          <li key={index} className={`${_ === activeItem ? style.active : ""}`}>
            {_}
          </li>
        ))}
        <li className={style.languageItem}>
          <Link href={`../${lang === "en" ? "fa" : "en"}`}>
            <span>{lang === "en" ? "فارسی" : "English"}</span>
            <img src="/media/landing/svgs/language-translator.svg" alt="icon" />
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
