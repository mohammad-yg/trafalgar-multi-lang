export type AppLang = "en" | "fa";
export type AppTranslator = {
  translate: (path: string[], key: string) => string;
};

export type LayoutContextType = {
  lang: AppLang;
  appTranslator: AppTranslator;
};

export const initialLayoutContext: LayoutContextType = {
  lang: "en",
  appTranslator: { translate: () => "" },
};
