import {
  Stack,
  Typography,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import Image from "next/image";
import React, { ReactNode, use, useState } from "react";
import Link from "next/link";
import { ExpandMore, GitHub, OpenInNew, Yard } from "@mui/icons-material";

interface Props {
  name: string;
  imageSource?: string;
  url: string;
  frontendRepositoryUrl?: string;
  backendRepositoryUrl?: string;
  tech?: string[];
  overview: ReactNode;
  usage?: ReactNode;
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
    <Stack spacing={2}>
      <Typography variant="h4">{name}</Typography>
      {overview}
      {tech && <Typography variant="body2">{tech.join(", ")}</Typography>}
      <Stack
        direction="row"
        alignItems={"center"}
        spacing={2}
        flexWrap={"wrap"}
      >
        <Link href={url} passHref>
          <Stack direction="row" alignItems={"center"} spacing={0.5}>
            <OpenInNew />
            <Typography>visit</Typography>
          </Stack>
        </Link>

        {frontendRepositoryUrl && (
          <Link href={frontendRepositoryUrl} passHref>
            <Stack direction="row" alignItems={"center"} spacing={0.5}>
              <GitHub />
              <Typography>frontend</Typography>
            </Stack>
          </Link>
        )}
        {backendRepositoryUrl && (
          <Link href={backendRepositoryUrl} passHref>
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
            <AccordionDetails>{usage}</AccordionDetails>
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
