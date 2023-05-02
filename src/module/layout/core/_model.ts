export type AppLang = "en" | "fa";

export type LayoutContextType = {
  lang: AppLang;
};

export const initialLayoutContext: LayoutContextType = {
  lang: "en",
};
