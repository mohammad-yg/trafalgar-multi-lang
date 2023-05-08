import { FC } from "react";
import LayoutContextProvider from "./core/LayoutContextProvider";
import Head from "next/head";
import { AppLang } from "./core/_model";
import { WithChild } from "../shared/_models";
import { rltLangs } from "./core/translator";

type Prop = {
  lang: AppLang;
  title?: string;
};

const Layout: FC<Prop & WithChild> = ({ lang, title, children }) => {
  const dir = rltLangs.includes(lang) ? "rtl" : "ltr";

  return (
    <LayoutContextProvider lang={lang}>
      <Head>
        <title>{title ? `trafalgar | ${title}` : "trafalgar"}</title>
      </Head>
      <main
        data-lang={lang}
        data-dir={dir}
        id="main"
        dir={dir}
      >
        <div className="parent">{children}</div>
      </main>
    </LayoutContextProvider>
  );
};

export default Layout;
