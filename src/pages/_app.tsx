import type { AppProps } from "next/app";
import MenuBar from "./components/menuBar";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>omi.t Portfolio site</title>
      </Head>
      <MenuBar />
      <Component {...pageProps} />
    </>
  );
}
