import { Typography, Stack, Chip } from "@mui/material";
import Link from "next/link";
import { ReactNode } from "react";
import { OpenInNew } from "@mui/icons-material";

interface Props {
  url?: string;
  day: string;
  title: string;
  description: ReactNode;
  reference?: string;
  referenceTitle?: string;
}

export const StudyElement: React.FC<Props> = ({
  url,
  day,
  title,
  description,
  reference,
  referenceTitle,
}) => {
  return (
    <Stack spacing={1} alignItems={"start"}>
      <Stack direction={"row"} alignItems={"center"} spacing={3}>
        <Chip variant="filled" label={day} />
        <Typography fontWeight={"bold"}>{title}</Typography>
        {url && (
          <Link href={url} target="_blank">
            <Stack direction={"row"} alignItems={"center"} spacing={0.5}>
              <Typography variant="body2">学習記録</Typography>
              <OpenInNew fontSize="small" />
            </Stack>
          </Link>
        )}
      </Stack>
      {description}
      {/* {reference && (
        <Link href={reference} target="_blank">
          {referenceTitle}
        </Link>
      )} */}
    </Stack>
  );
};
