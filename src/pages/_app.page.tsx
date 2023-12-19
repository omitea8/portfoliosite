import type { AppProps } from "next/app";
import MenuBar from "../components/MenuBar";
import { Container, Stack } from "@mui/material";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Container maxWidth={"lg"} sx={{ paddingBottom: "30px" }}>
        <Stack spacing={3}>
          <MenuBar />
          <Component {...pageProps} />
        </Stack>
      </Container>
    </>
  );
}
