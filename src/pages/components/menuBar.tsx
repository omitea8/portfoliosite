import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import router from "next/router";
import Image from "next/image";
import { Stack } from "@mui/material";
import Link from "next/link";

export default function MenuBar() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        flexGrow: 1,
        boxShadow: "none",
      }}
    >
      <Stack alignItems={"center"}>
        <Stack direction="row" spacing={2} alignItems={"center"}>
          <Image src="/omitea.png" alt="Omitea Logo" width={50} height={50} />
          <Link href="/">
            <Typography color={"black"}>omi.t</Typography>
          </Link>
          <Button
            style={{ color: "black" }}
            onClick={() => {
              router.push("/history.page");
            }}
          >
            History
          </Button>
          <Button
            style={{ color: "black" }}
            onClick={() => {
              router.push("/other.page");
            }}
          >
            Other
          </Button>
        </Stack>
      </Stack>
    </AppBar>
  );
}
