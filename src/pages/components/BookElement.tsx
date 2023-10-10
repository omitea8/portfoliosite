import { Stack, Typography } from "@mui/material";
import { ReactNode } from "react";
import { Done, OpenInNew } from "@mui/icons-material";
import Link from "next/link";

interface Props {
  bookName: string;
  url: string;
  review?: ReactNode;
}

export const BooksElement: React.FC<Props> = ({ bookName, url, review }) => {
  return (
    <Stack spacing={1} alignItems={"start"}>
      <Stack direction={"row"} alignItems={"center"} spacing={1}>
        <Done />
        <Link href={url} target="_blank">
          <Typography fontWeight={"bold"}>{bookName}</Typography>
        </Link>
        {review}
      </Stack>
    </Stack>
  );
};
