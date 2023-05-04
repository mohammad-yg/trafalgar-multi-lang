import { FC, useState } from "react";
import { AppLang } from "./_model";
import { WithChild } from "@/module/shared/_models";
import { LayoutCotnext } from "./layoutContext";

type Prop = {
  lang: AppLang;
};

const LayoutContextProvider: FC<Prop & WithChild> = ({
  lang: langProp,
  children,
}) => {
  return (
    <LayoutCotnext.Provider value={{ lang: langProp }}>
      {children}
    </LayoutCotnext.Provider>
  );
};

export default LayoutContextProvider;
