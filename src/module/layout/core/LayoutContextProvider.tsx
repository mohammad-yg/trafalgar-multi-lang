import { FC } from "react";
import { AppLang, AppTranslator } from "./_model";
import { WithChild } from "@/module/shared/_models";
import { LayoutCotnext } from "./layoutContext";
import appTranslate from "./translator";
import { AppDictionary } from "./translator/_models";
import enDictionary from "./translator/dictionary/en";
import faDictionary from "./translator/dictionary/fa";

type Prop = {
  lang: AppLang;
};

const LayoutContextProvider: FC<Prop & WithChild> = ({
  lang: langProp,
  children,
}) => {
  var dictionary: AppDictionary = enDictionary;
  
  if (langProp === "fa") dictionary = faDictionary;
  
  const appTranslator: AppTranslator = {
    translate: (path: string[], key: string) => {
      return appTranslate(dictionary, path, key);
    },
  };

  return (
    <LayoutCotnext.Provider value={{ lang: langProp, appTranslator }}>
      {children}
    </LayoutCotnext.Provider>
  );
};

export default LayoutContextProvider;
