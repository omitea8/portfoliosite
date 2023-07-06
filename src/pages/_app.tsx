import type { AppProps } from "next/app";
import MenuBar from "./components/menuBar";
import Head from "next/head";
import { Container, Stack } from "@mui/material";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>omi.t Portfolio</title>
      </Head>
      <Container maxWidth={"md"} sx={{ paddingBottom: "30px" }}>
        <Stack spacing={3}>
          <MenuBar />
          <Component {...pageProps} />
        </Stack>
      </Container>
    </>
  );
}
