import { IconButton, Stack, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import { HistoryElement } from "./HistoryElement";
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
          2022年4月からプログラミングの勉強を開始しました。家族の現役エンジニアに教えてもらいながら日々奮闘中です。
        </Typography>
        <Typography>
          もともと”ものを作る”ことが好きでした。プログラミングをはじめたきっかけは、作りたいものができたからです。自分の書いたものが動くことにプログラミングの楽しさを感じています。
          現在はアプリケーションの開発の全体を把握できるよう手広く学んできました。今後はフロントエンドの技術に集中し、より専門的な知識を身につけていきたいと考えています。
        </Typography>
      </Stack>
      <Stack spacing={2}>
        <Typography variant="h4">経歴</Typography>
        <HistoryElement
          day="~2008"
          title="私立済美高等学校 美術科"
          // description="素描を始め油絵や日本画や彫刻、歴史など幅広く美術について学びました。専攻はデザインで、商業デザインについて学びながら作品と向き合うことを体験しました。"
        />
        <HistoryElement
          day="~2010"
          title="日本電子専門学校 アニメーション科"
          // description="アニメ作成の一通りを学びました。背景の作画とAEを使った撮影などを主に担当し、大人数でのチーム制作を体験しました。"
        />
        <HistoryElement day="~2013" title="飲食店アルバイト" />
        <HistoryElement day="~2022" title="派遣社員として一般事務" />
        <HistoryElement day="~現在" title="エンジニアになるために勉強中" />
      </Stack>
    </Stack>
  );
};

export default AboutPage;
