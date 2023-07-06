import type { AppProps } from "next/app";
import MenuBar from "./components/menuBar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MenuBar />
      <Component {...pageProps} />
    </>
  );
}
