import { Divider, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React, { ReactNode } from "react";
import Link from "next/link";
import { GitHub, OpenInNew } from "@mui/icons-material";
import { Tech, TechChip } from "./TechChip";

interface Props {
  name: string;
  imageSource?: string;
  url?: string;
  frontendRepositoryUrl?: string;
  backendRepositoryUrl?: string;
  tech: Tech[];
  overview: string;
  usage?: string[];
  concept?: ReactNode;
  problems?: ReactNode;
}

export const ProductsElement: React.FC<Props> = ({
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
    <Stack spacing={3}>
      <Stack spacing={0}>
        <Typography variant="h6">{overview}</Typography>
        <Stack direction="row" alignItems={"center"} spacing={3}>
          {url ? (
            <Link href={url} target="_blank">
              <Stack direction="row" alignItems={"center"} spacing={0.5}>
                <Typography variant="h4">{name}</Typography>
                <OpenInNew fontSize="large" />
              </Stack>
            </Link>
          ) : (
            <Typography variant="h4">{name}</Typography>
          )}

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
      </Stack>
      <Stack direction={"row"} spacing={1} flexWrap={"wrap"}>
        {tech.map((tech) => (
          <TechChip key={tech} tech={tech} />
        ))}
      </Stack>
      <Stack spacing={5}>
        {imageSource && (
          <Image
            src={imageSource}
            alt={`${name}`}
            width={800}
            height={400}
            layout="responsive"
            style={{ border: "1px solid lightGray" }}
          />
        )}
        {usage && (
          <Stack>
            <Typography variant="h6" fontWeight={"bold"}>
              機能
            </Typography>
            <Stack spacing={1}>
              <Divider />
              <Typography>{usage.join(", ")}</Typography>
            </Stack>
          </Stack>
        )}
        {concept && (
          <Stack>
            <Typography variant="h6" fontWeight={"bold"}>
              目的とコンセプト
            </Typography>
            <Stack spacing={1}>
              <Divider />
              {concept}
            </Stack>
          </Stack>
        )}

        {problems && (
          <Stack>
            <Typography variant="h6" fontWeight={"bold"}>
              難しかった課題
            </Typography>
            <Stack spacing={1}>
              <Divider />
              {problems}
            </Stack>
          </Stack>
        )}
      </Stack>{" "}
    </Stack>
  );
};
