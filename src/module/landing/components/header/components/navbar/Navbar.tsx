import { FC } from "react";

import style from "./style.module.scss";

const Navbar: FC = () => {
    const activeItem = "Home";
    const items = ["Home", "Find a doctor", "Apps", "Testimonials", "About us"];
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
