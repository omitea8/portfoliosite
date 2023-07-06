import type { AppProps } from "next/app";
import MenuBar from "./components/menuBar";
import { Container, Stack } from "@mui/material";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Container maxWidth={"md"} sx={{ paddingBottom: "30px" }}>
        <Stack spacing={3}>
          <MenuBar />
          <Component {...pageProps} />
        </Stack>
      </Container>
    </>
  );
}
