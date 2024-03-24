import type { AppProps } from "next/app";
import MenuBar from "../components/MenuBar";
import { Container, Stack, ThemeProvider, createTheme } from "@mui/material";
import "../styles/globals.css";

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          lineHeight: 2,
        },
      },
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container maxWidth={"md"} sx={{ paddingBottom: "100px" }}>
          <Stack spacing={3}>
            <MenuBar />
            <Component {...pageProps} />
          </Stack>
        </Container>
      </ThemeProvider>
    </>
  );
}
