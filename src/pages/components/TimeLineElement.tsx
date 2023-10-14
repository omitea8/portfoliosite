import { Stack, Typography } from "@mui/material";
import {
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import { ReactNode } from "react";

interface Props {
  day: string;
  title: string;
  description?: string;
  icon?: ReactNode;
  line: boolean;
}

export const TimeLineElement: React.FC<Props> = ({
  day,
  title,
  description,
  line,
}) => {
  return (
    <Stack>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          {line && <TimelineConnector />}
        </TimelineSeparator>
        <TimelineContent>
          <Stack direction={"row"} spacing={2}>
            <Typography>{day}</Typography>
            <Stack>
              <Typography>{title}</Typography>
              <Typography variant="body2" color={"gray"}>
                {description}
              </Typography>
            </Stack>
          </Stack>
        </TimelineContent>
      </TimelineItem>
    </Stack>
  );
};
