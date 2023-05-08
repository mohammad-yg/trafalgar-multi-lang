import { FC } from "react";
import Navbar from "./components/navbar/Navbar";
import Logo from "./components/logo/Logo";
import style from "./style.module.scss";

const Header: FC = () => {
  return (
    <>
      <div className={style.headerwrapper}>
        <Logo />
        <Navbar />
      </div>
    </>
  );
};

export default Header;
