import { IconButton, Stack, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Logo } from "../../components/Logo";

const AboutPage: React.FC = () => {
  return (
    <Stack spacing={5}>
      <Logo size="h3" name="About" />
      <Stack spacing={1}>
        <Stack direction="row" alignItems={"center"} spacing={1}>
          <Typography variant="h4">omi.t</Typography>
          <IconButton onClick={() => window.open("https://github.com/omitea8")}>
            <GitHubIcon />
          </IconButton>
          <IconButton
            onClick={() => window.open("https://twitter.com/omitea8")}
          >
            <TwitterIcon />
          </IconButton>
        </Stack>
        <Typography>愛媛県生まれ奈良県在住。</Typography>
        <Typography>
          2022年4月からソフトウェアエンジニアリングの勉強を開始しました。2023年1月から自主開発として画像投稿webアプリケーションのcaitaというサービスを開発しています。
        </Typography>
        <Typography>
          もともと”ものを作る”ことが好きでした。開発をはじめたきっかけは、作りたいものができたからです。自分の書いたものが動くことに開発の楽しさを感じています。
          これまではアプリケーションの開発の全体を把握できるよう手広く学んできました。今後はフロントエンドの技術に集中し、より専門的な知識を身につけていきたいと考えています。
        </Typography>
      </Stack>
      <Stack spacing={1}>
        <Typography variant="h5">できること</Typography>
        <ul>
          <li>フロントエンド・バックエンド開発</li>
          <li>フロントエンドにおけるテストの実装</li>
          <li>IaaSへのプロダクトのデプロイ</li>
          <li>サービスのコンセプト設計からリリース</li>
          <li>調査したことや設計方針についての文書化</li>
          <li>DB テーブル設計</li>
          <li>SQL による操作</li>
          <li>これらについてメンターの助けを求めつつ独立で身につける自走力</li>
        </ul>
      </Stack>
    </Stack>
  );
};

export default AboutPage;
