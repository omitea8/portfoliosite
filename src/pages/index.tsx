import { Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Stack spacing={3}>
        <Typography variant="h4">About</Typography>
        <Image src="/omitea.png" alt="Omitea Logo" width={150} height={150} />
        <Typography variant="body1">プロフィール文を書く</Typography>
        <Typography variant="h4">Job Career</Typography>
        <Typography variant="body1">職歴を書く</Typography>
      </Stack>
    </>
  );
}
