import { Typography, Stack } from "@mui/material";

interface Props {
  day: string;
  title: string;
  description?: string;
}

export const HistoryElement: React.FC<Props> = ({
  day,
  title,
  description,
}) => {
  return (
    <Stack direction={"row"} spacing={3}>
      <Typography>{day}</Typography>
      <Stack>
        <Typography>{title}</Typography>
        <Typography color="text.secondary" variant="subtitle2">
          {description}
        </Typography>
      </Stack>
    </Stack>
  );
};
