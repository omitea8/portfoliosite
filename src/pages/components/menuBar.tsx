import * as React from "react";
import { AppBar, Stack, Typography, Tabs, Tab } from "@mui/material";
import { useRouter } from "next/router";
import Image from "next/image";

const MenuBar = () => {
  const router = useRouter();
  const [value, setValue] = React.useState<string>("home");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);

    switch (newValue) {
      case "home":
        router.push("/");
        break;
      case "skill":
        router.push("/skill");
        break;
      case "study":
        router.push("/study");
        break;
      case "output":
        router.push("/output");
        break;
      default:
        break;
    }
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        flexGrow: 1,
        boxShadow: "none",
      }}
    >
      <Stack alignItems={"center"} spacing={2}>
        <Stack direction="row" alignItems={"center"} spacing={2}>
          <Image src="/omitea.png" alt="omitea Logo" width={50} height={50} />
          <Typography variant="h6" color={"black"}>
            omi.t Portfolio
          </Typography>
        </Stack>
        <Tabs
          value={value}
          onChange={handleChange}
          sx={{
            "& .MuiTab-root.Mui-selected": { color: "black" },
            ".MuiTabs-indicator": {
              backgroundColor: "black",
            },
          }}
        >
          <Tab label="About" value="home" />
          <Tab label="Skill" value="skill" />
          <Tab label="Study" value="study" />
          <Tab label="Output" value="output" />
        </Tabs>
      </Stack>
    </AppBar>
  );
};

export default MenuBar;
