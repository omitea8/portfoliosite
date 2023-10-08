import {
  Stack,
  Typography,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import Image from "next/image";
import React, { ReactNode, useState } from "react";
import Link from "next/link";
import { ExpandMore, GitHub, OpenInNew } from "@mui/icons-material";

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
        <Link href={url} passHref>
          <Stack direction="row" alignItems={"center"}>
            <OpenInNew />
            visit
          </Stack>
        </Link>

        {frontendRepositoryUrl && (
          <Link href={frontendRepositoryUrl} passHref>
            <Stack direction="row" alignItems={"center"}>
              <GitHub />
              frontend
            </Stack>
          </Link>
        )}
        {backendRepositoryUrl && (
          <Link href={backendRepositoryUrl} passHref>
            <Stack direction="row" alignItems={"center"}>
              <GitHub />
              backend
            </Stack>
          </Link>
        )}
      </Stack>
      <Stack spacing={1}>
        <Typography variant="body2">{tech.join(", ")}</Typography>
        <Accordion
          expanded={expanded === "overview"}
          onChange={handleChange("overview")}
          sx={{ boxShadow: "none" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel-content"
          >
            <Typography>概要</Typography>
          </AccordionSummary>
          <AccordionDetails>{overview}</AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "tech"}
          onChange={handleChange("tech")}
          sx={{ boxShadow: "none" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel-content"
          >
            <Typography>機能</Typography>
          </AccordionSummary>
          <AccordionDetails>{usage}</AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "concept"}
          onChange={handleChange("concept")}
          sx={{ boxShadow: "none" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel-content"
          >
            <Typography>目的とコンセプト</Typography>
          </AccordionSummary>
          <AccordionDetails>{concept}</AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "problems"}
          onChange={handleChange("problems")}
          sx={{ boxShadow: "none" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMore />}
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
