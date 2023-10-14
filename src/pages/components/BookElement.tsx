import { Stack, Typography } from "@mui/material";
import { ReactNode } from "react";
import { Done, OpenInBrowser, OpenInNew } from "@mui/icons-material";
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
          <Stack direction={"row"} alignItems={"center"} spacing={1}>
            <Typography fontWeight={"bold"}>{bookName}</Typography>
            <OpenInNew fontSize="small" />
          </Stack>
        </Link>
        {review}
      </Stack>
    </Stack>
  );
};
