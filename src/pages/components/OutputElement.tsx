import {
  Stack,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import Image from "next/image";
import React, { ReactNode, useState } from "react";
import Link from "next/link";
import { ExpandMore, GitHub, OpenInNew } from "@mui/icons-material";
import { Tech, TechChip } from "./TechChip";

interface Props {
  name: string;
  imageSource?: string;
  url: string;
  frontendRepositoryUrl?: string;
  backendRepositoryUrl?: string;
  tech: Tech[];
  overview: ReactNode;
  usage?: string[];
  concept?: ReactNode;
  problems?: ReactNode;
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
    <Stack spacing={1}>
      <Link href={url} target="_blank">
        <Stack direction="row" alignItems={"center"} spacing={0.5}>
          <Typography variant="h4">{name}</Typography>
          <OpenInNew fontSize="large" />
        </Stack>
      </Link>
      {overview}
      <Stack direction={"row"} spacing={0.5} flexWrap={"wrap"}>
        {tech.map((tech) => (
          <TechChip key={tech} tech={tech} />
        ))}
      </Stack>

      <Stack
        direction="row"
        alignItems={"center"}
        spacing={2}
        flexWrap={"wrap"}
      >
        {frontendRepositoryUrl && (
          <Link href={frontendRepositoryUrl} target="_blank">
            <Stack direction="row" alignItems={"center"} spacing={0.5}>
              <GitHub />
              <Typography>frontend</Typography>
            </Stack>
          </Link>
        )}
        {backendRepositoryUrl && (
          <Link href={backendRepositoryUrl} target="_blank">
            <Stack direction="row" alignItems={"center"} spacing={0.5}>
              <GitHub />
              <Typography>backend</Typography>
            </Stack>
          </Link>
        )}
      </Stack>
      {imageSource && (
        <Image
          src={imageSource}
          alt={`${name}`}
          width={800}
          height={400}
          style={{ boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.2)" }}
        />
      )}
      <Stack spacing={1}>
        {usage && (
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
            <AccordionDetails>{usage.join(", ")}</AccordionDetails>
          </Accordion>
        )}
        {concept && (
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
        )}
        {problems && (
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
        )}
      </Stack>
    </Stack>
  );
};
