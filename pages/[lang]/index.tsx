import Landing from "@/module/landing/Landing";
import { getLang } from "@/module/layout/core/services";
import { GetStaticPropsContext } from "next";

const Index = (props: any) => {
  return <Landing lang={props.lang} />;
};

async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: {
      lang: getLang(context),
    },
  };
}

async function getStaticPaths() {
  return {
    paths: [
      {
        params: { lang: "fa" },
      },
      {
        params: { lang: "en" },
      },
    ],
    fallback: true,
  };
}

export default Index;
export { getStaticProps, getStaticPaths };
