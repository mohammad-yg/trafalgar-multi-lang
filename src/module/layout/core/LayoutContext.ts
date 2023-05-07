import { createContext, useContext } from "react";
import { LayoutContextType, initialLayoutContext } from "./_model";

const LayoutCotnext = createContext<LayoutContextType>(initialLayoutContext);

const useLang = () => {
  const {lang} = useContext(LayoutCotnext)

  return lang
}

const useAppTranslator = () => {
  const {appTranslator} = useContext(LayoutCotnext)

  return appTranslator
}

export {
  LayoutCotnext,
  useLang,
  useAppTranslator
};
