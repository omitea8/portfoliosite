import { Typography, Stack } from "@mui/material";
import Link from "next/link";
import { OpenInNew } from "@mui/icons-material";
import {
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from "@mui/lab";

interface Props {
  url?: string;
  day: string;
  line: boolean;
  title: string;
  description: string;
  reference?: string;
  referenceTitle?: string;
}

export const StudyElement: React.FC<Props> = ({
  url,
  day,
  line,
  title,
  description,
  reference,
  referenceTitle,
}) => {
  return (
    <TimelineItem>
      <TimelineOppositeContent color="text.secondary">
        {day}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot />
        {line && <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent>
        <Stack direction={"row"} alignItems={"center"} spacing={1}>
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
        <Typography>{description}</Typography>
        {/* {reference && (
            <Link href={reference} target="_blank">
              {referenceTitle}
            </Link>
          )} */}
      </TimelineContent>
    </TimelineItem>
  );
};
