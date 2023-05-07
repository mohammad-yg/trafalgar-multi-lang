import { FC } from "react";
import style from "./style.module.scss";
import { useAppTranslator } from "@/module/layout/core/layoutContext";

const Navbar: FC = () => {
  const activeItem = "Home";
  const translator = useAppTranslator();
  const items = [
    "Home",
    "Find_a_doctor",
    "Apps",
    "Testimonials",
    "About_us",
  ].map((_) => translator.translate(["landing", "header"], _));
  return (
    <>
      <ul className={style.list}>
        {items.map((_, index) => (
          <li key={index} className={`${_ === activeItem ? style.active : ""}`}>
            {_}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Navbar;
