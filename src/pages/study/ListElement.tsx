import { Stack, Typography } from "@mui/material";
import { ReactNode } from "react";
import {
  CircleOutlined,
  CheckCircleOutline,
  OpenInNew,
} from "@mui/icons-material";
import Link from "next/link";

interface Props {
  name: string;
  url: string;
  review?: ReactNode;
  progress: Boolean;
}

export const ListElement: React.FC<Props> = ({
  name,
  url,
  review,
  progress,
}) => {
  const displayIcon = progress ? <CircleOutlined /> : <CheckCircleOutline />;

  return (
    <Stack spacing={1} alignItems={"start"}>
      <Stack direction={"row"} alignItems={"center"} spacing={1}>
        {displayIcon}
        <Link href={url} target="_blank">
          <Stack direction={"row"} alignItems={"center"} spacing={1}>
            <Typography fontWeight={"bold"}>{name}</Typography>
            <OpenInNew fontSize="small" />
          </Stack>
        </Link>
      </Stack>
      {review}
    </Stack>
  );
};
