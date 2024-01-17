import { Typography, Stack } from "@mui/material";
import Link from "next/link";
import { OpenInNew } from "@mui/icons-material";
import {
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from "@mui/lab";

interface Props {
  url?: string;
  day: string;
  title: string;
  description: string;
}

export const StudyElement: React.FC<Props> = ({
  url,
  day,
  title,
  description,
}) => {
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Stack spacing={2} mb={3}>
          <Typography color="text.secondary">{day}</Typography>
          <Stack spacing={1}>
            <Typography fontWeight={"bold"}>{title}</Typography>
            <Typography>{description}</Typography>
          </Stack>
          {url && (
            <Link href={url} target="_blank">
              <Stack direction={"row"} alignItems={"center"} spacing={0.5}>
                <Typography variant="body2">学習記録</Typography>
                <OpenInNew fontSize="small" />
              </Stack>
            </Link>
          )}
        </Stack>
      </TimelineContent>
    </TimelineItem>
  );
};
