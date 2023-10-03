import * as React from "react";
import { AppBar, Stack, Button, Typography } from "@mui/material";
import router from "next/router";
import Image from "next/image";

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
        <Stack direction="row" alignItems={"center"} spacing={2}>
          <Image src="/omitea.png" alt="omitea Logo" width={50} height={50} />
          <Typography variant="h6" color={"black"}>
            omi.t Portfolio
          </Typography>
        </Stack>
        <Stack direction="row" spacing={2} alignItems={"center"}>
          <Button
            style={{ color: "black" }}
            onClick={() => {
              router.push("/");
            }}
          >
            About
          </Button>
          <Button
            style={{ color: "black" }}
            onClick={() => {
              router.push("/skill");
            }}
          >
            Skill
          </Button>
          <Button
            style={{ color: "black" }}
            onClick={() => {
              router.push("/output");
            }}
          >
            Output
          </Button>
        </Stack>
      </Stack>
    </AppBar>
  );
}
