import { GetStaticPropsContext } from "next";
import { AppLang } from "./_model";

export const getLang: (context: GetStaticPropsContext) => AppLang = (
  context
) => {
  const lang = context.params!.lang;

  return lang as AppLang
};
