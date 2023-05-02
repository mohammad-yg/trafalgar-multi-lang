import { FC } from "react";
import { AppLang } from "../layout/core/_model";
import Layout from "../layout/Layout";

type Prop = {
  lang: AppLang;
};

const Landing: FC<Prop> = ({ lang }) => {
  return (
    <>
      <Layout title="Landing" lang={lang}></Layout>
    </>
  );
};

export default Landing;
