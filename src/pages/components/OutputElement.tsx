import { Divider, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React, { ReactNode } from "react";
import Link from "next/link";
import { GitHub, OpenInNew } from "@mui/icons-material";
import { Tech, TechChip } from "./TechChip";

interface Props {
  name: string;
  imageSource?: string;
  url: string;
  frontendRepositoryUrl?: string;
  backendRepositoryUrl?: string;
  tech: Tech[];
  overview: string;
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
  return (
    <Stack spacing={1}>
      <Typography variant="h6">{overview}</Typography>
      <Stack direction="row" alignItems={"center"} spacing={3}>
        <Link href={url} target="_blank">
          <Stack direction="row" alignItems={"center"} spacing={0.5}>
            <Typography variant="h4">{name}</Typography>
            <OpenInNew fontSize="large" />
          </Stack>
        </Link>
        <Stack
          direction="row"
          alignItems={"center"}
          spacing={2}
          flexWrap={"wrap"}
        >
          {frontendRepositoryUrl && (
            <Link href={frontendRepositoryUrl} target="_blank">
              <Stack direction="row" alignItems={"center"} spacing={0.5}>
                <GitHub fontSize="small" />
                <Typography variant="subtitle1">frontend</Typography>
              </Stack>
            </Link>
          )}
          {backendRepositoryUrl && (
            <Link href={backendRepositoryUrl} target="_blank">
              <Stack direction="row" alignItems={"center"} spacing={0.5}>
                <GitHub fontSize="small" />
                <Typography variant="subtitle1">backend</Typography>
              </Stack>
            </Link>
          )}
        </Stack>
      </Stack>

      <Stack direction={"row"} spacing={0.5} flexWrap={"wrap"}>
        {tech.map((tech) => (
          <TechChip key={tech} tech={tech} />
        ))}
      </Stack>
      <Stack spacing={3}>
        {" "}
        {imageSource && (
          <Image
            src={imageSource}
            alt={`${name}`}
            width={800}
            height={400}
            style={{ border: "1px solid lightGray" }}
          />
        )}
        {usage && (
          <Stack spacing={1}>
            {" "}
            <Divider textAlign="left">
              <Typography variant="subtitle2" fontWeight={"bold"}>
                機能
              </Typography>
            </Divider>
            <Typography>{usage.join(", ")}</Typography>
          </Stack>
        )}
        <Stack spacing={1}>
          {concept && (
            <Stack spacing={1}>
              <Divider textAlign="left">
                <Typography variant="subtitle2" fontWeight={"bold"}>
                  目的とコンセプト
                </Typography>
              </Divider>
              {concept}
            </Stack>
          )}
        </Stack>
        {problems && (
          <Stack spacing={1}>
            {" "}
            <Divider textAlign="left">
              <Typography variant="subtitle2" fontWeight={"bold"}>
                難しかった課題
              </Typography>
            </Divider>
            {problems}
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};
