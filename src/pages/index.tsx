import { IconButton, Stack, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Home() {
  return (
    <Stack spacing={3}>
      <Stack spacing={1}>
        <Typography variant="h4">About</Typography>
        <Stack direction="row" alignItems={"center"} spacing={1}>
          <Typography variant="h5">Mio Takahashi</Typography>
          <IconButton onClick={() => window.open("https://github.com/omitea8")}>
            <GitHubIcon />
          </IconButton>
          <IconButton
            onClick={() => window.open("https://twitter.com/omitea8")}
          >
            <TwitterIcon />
          </IconButton>
        </Stack>
        <Typography>1989年生まれ(現34歳)。愛媛県生まれ奈良県在住。</Typography>
        <Typography>
          2022年4月からプログラミングの勉強を開始した初心者。家族の現役エンジニアに教えてもらいながら日々奮闘中です。
        </Typography>
        <Typography>
          コードどころか機械のことはわからないという感じの人生でしたので、まずは開発の全体の流れを把握できるよう勉強してきました。今後はフロントエンドに集中し、よりよいUI/UXを作れるようになるため専門的な知識を身につけていきたいと思っています。
        </Typography>
      </Stack>
      <Stack spacing={1}>
        <Typography variant="h4">History</Typography>
        <Typography>〜2008 私立済美高等学校 美術科(愛媛県)</Typography>
        <Typography>〜2010 日本電子専門学校 アニメーション科</Typography>
        <Typography>〜2013 飲食店アルバイト</Typography>
        <Typography>〜2022 派遣社員として一般事務</Typography>
        <Typography>〜現在 エンジニアになるために勉強中</Typography>
      </Stack>
    </Stack>
  );
}
