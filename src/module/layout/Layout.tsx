import { FC } from "react";
import LayoutContextProvider from "./core/LayoutContextProvider";
import Head from "next/head";
import { AppLang } from "./core/_model";
import { WithChild } from "../shared/_models";

type Prop = {
  lang: AppLang;
  title?: string;
};

const Layout: FC<Prop & WithChild> = ({
  lang,
  title,
  children,
}) => {
  return (
    <LayoutContextProvider lang={lang}>
      <Head>
        <title>{title ? `trafalgar | ${title}` : 'trafalgar'}</title>
      </Head>
      <main>{children}</main>
    </LayoutContextProvider>
  );
};

export default Layout;
