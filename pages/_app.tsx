import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  //refer material-confirm-alert
  return <Component {...pageProps} />;
}

export default MyApp;
