import { FC } from "react";
import style from "./style.module.scss";
import Link from "next/link";

const Footer: FC = () => {
  const columnLisnk = [
    ["Company", "About", "Testimonials", "Find a doctor", "Apps"],
    ["Region", "Indonesia", "Singapore", "Hongkong", "Canada"],
    ["Help", "Help center", "Contact support", "Instructions", "How it works"],
  ];

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
                Trafalgar provides progressive, and affordable healthcare,
                accessible on mobile and online for everyone
              </p>
              <p>©Trafalgar PTY LTD 2020. All rights reserved</p>
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
