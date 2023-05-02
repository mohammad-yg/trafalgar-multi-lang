import "../src/module/shared/fonts.scss";
import "../src/module/shared/global.scss";

export default function App({
  Component,
  pageProps,
}: {
  Component: any;
  pageProps: any;
}) {
  return <Component {...pageProps} />;
}
