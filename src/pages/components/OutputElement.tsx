import {
  Stack,
  Typography,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import Image from "next/image";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PreviewIcon from "@mui/icons-material/Preview";
import GitHubIcon from "@mui/icons-material/GitHub";
import React, { ReactNode, useState } from "react";

interface Props {
  name: string;
  imageSource: string;
  url: string;
  frontendRepositoryUrl?: string;
  backendRepositoryUrl?: string;
  tech: string[];
  overview: ReactNode;
  usage: ReactNode;
  concept: ReactNode;
  problems: ReactNode;
}

export const OutputElement: React.FC<Props> = ({
  name,
  imageSource,
  url,
  frontendRepositoryUrl,
  backendRepositoryUrl,
  tech,
  overview,
  usage,
  concept,
  problems,
}) => {
  // アコーディオンの設定
  const [expanded, setExpanded] = useState<string | false>(false);
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Stack spacing={2}>
      <Typography variant="h5">{name}</Typography>
      <Image
        src={imageSource}
        alt={`${name}`}
        width={400}
        height={200}
        style={{ boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.2)" }}
      />
      <Stack
        direction="row"
        alignItems={"center"}
        spacing={1}
        flexWrap={"wrap"}
      >
        <Button
          variant="outlined"
          sx={{ textTransform: "none" }}
          startIcon={<PreviewIcon />}
          onClick={() => window.open(url)}
        >
          visit
        </Button>
        {frontendRepositoryUrl && (
          <Button
            variant="outlined"
            sx={{ textTransform: "none" }}
            startIcon={<GitHubIcon />}
            onClick={() => window.open(frontendRepositoryUrl)}
          >
            frontend
          </Button>
        )}
        {backendRepositoryUrl && (
          <Button
            variant="outlined"
            sx={{
              textTransform: "none",
            }}
            startIcon={<GitHubIcon />}
            onClick={() => window.open(backendRepositoryUrl)}
          >
            backend
          </Button>
        )}
      </Stack>
      <Stack spacing={1}>
        <Typography variant="body2">{tech.join(", ")}</Typography>
        <Accordion
          expanded={expanded === "caita_about"}
          onChange={handleChange("caita_about")}
          sx={{ boxShadow: "none" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel-content"
          >
            <Typography>概要</Typography>
          </AccordionSummary>
          <AccordionDetails>{overview}</AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "caita_function"}
          onChange={handleChange("caita_function")}
          sx={{ boxShadow: "none" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel-content"
          >
            <Typography>機能</Typography>
          </AccordionSummary>
          <AccordionDetails>{usage}</AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "caita_concept"}
          onChange={handleChange("caita_concept")}
          sx={{ boxShadow: "none" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel-content"
          >
            <Typography>目的とコンセプト</Typography>
          </AccordionSummary>
          <AccordionDetails>{concept}</AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "caita_assignment"}
          onChange={handleChange("caita_assignment")}
          sx={{ boxShadow: "none" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel-content"
          >
            <Typography>難しかった課題</Typography>
          </AccordionSummary>
          <AccordionDetails>{problems}</AccordionDetails>
        </Accordion>
      </Stack>
    </Stack>
  );
};
