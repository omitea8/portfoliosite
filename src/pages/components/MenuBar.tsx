import * as React from "react";
import { AppBar, Stack, Tabs, Tab } from "@mui/material";
import { useRouter } from "next/router";
import Image from "next/image";
import { Logo } from "./Logo";

const MenuBar = () => {
  const router = useRouter();
  const [value, setValue] = React.useState<string>("output");

  React.useEffect(() => {
    switch (router.pathname) {
      case "/output":
        setValue("output");
        break;
      case "/skill":
        setValue("skill");
        break;
      case "/study":
        setValue("study");
        break;
      case "/about":
        setValue("about");
        break;
      default:
        setValue("output");
        break;
    }
  }, [router.pathname]);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);

    switch (newValue) {
      case "output":
        router.push("/output");
        break;
      case "skill":
        router.push("/skill");
        break;
      case "study":
        router.push("/study");
        break;
      case "about":
        router.push("/about");
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
        color: "black",
      }}
    >
      <Stack alignItems={"center"}>
        <Stack direction="row" alignItems={"center"} spacing={2}>
          <Image src="/omitea.png" alt="omitea Logo" width={50} height={50} />
          <Logo size="h5" name="omi.t Portfolio" />
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
          <Tab label="Output" value="output" />
          <Tab label="Skill" value="skill" />
          <Tab label="Study" value="study" />
          <Tab label="About" value="about" />
        </Tabs>
      </Stack>
    </AppBar>
  );
};

export default MenuBar;
