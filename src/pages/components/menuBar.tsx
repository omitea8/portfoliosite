import * as React from "react";
import { AppBar, Typography, Stack, Button } from "@mui/material";
import router from "next/router";
import Image from "next/image";
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
              router.push("/skill.page");
            }}
          >
            Skill
          </Button>
          <Button
            style={{ color: "black" }}
            onClick={() => {
              router.push("/output.page");
            }}
          >
            Output
          </Button>
        </Stack>
      </Stack>
    </AppBar>
  );
}
