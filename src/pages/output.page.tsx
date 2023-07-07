import { Box, Button, Stack, Typography } from "@mui/material";
import PreviewIcon from "@mui/icons-material/Preview";
import GitHubIcon from "@mui/icons-material/GitHub";
import Image from "next/image";

const OutPutPage: React.FC = () => {
  return (
    <Stack spacing={3}>
      <Typography variant="h4">Output</Typography>
      <Stack spacing={2}>
        <Stack
          direction="row"
          alignItems={"center"}
          spacing={1}
          flexWrap={"wrap"}
        >
          <Typography variant="h5">caita</Typography>
          <Button
            variant="outlined"
            startIcon={<PreviewIcon />}
            onClick={() => window.open("https://caita.today/")}
          >
            Preview
          </Button>
          <Button
            variant="outlined"
            startIcon={<GitHubIcon />}
            onClick={() =>
              window.open("https://github.com/omitea8/caita_frontend")
            }
          >
            frontend
          </Button>
          <Button
            variant="outlined"
            startIcon={<GitHubIcon />}
            onClick={() =>
              window.open("https://github.com/omitea8/caita_backend")
            }
          >
            backend
          </Button>
        </Stack>
        <Stack direction="row" spacing={3} flexWrap={"wrap"}>
          <Image
            src="/caita1.png"
            alt="caita"
            width={400}
            height={200}
            style={{ boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.2)" }}
          />

          <Image
            src="/caita2.png"
            alt="caita"
            width={400}
            height={200}
            style={{ boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.2)" }}
          />
        </Stack>
        <Stack>
          <Typography>
            現在開発中の画像の投稿サービスです。学んだことを活かして1つWebアプリケーションを作ろうと思い開発しています。
          </Typography>
          <Typography>
            既存の画像投稿サービスに自分の好みにぴったりとくるものがなく、作ればいいと言われ確かにその通りだと思い作り始めました。コンセプトは「簡単に投稿ができ且つ画像投稿者らしい閲覧ページを提供する」です。ワンクリックで投稿できることはもちろん、閲覧ページの色や背景などを簡単に変えられ、
            ある程度好みにカスタマイズできるサービスを目指しています。
            <Typography>
              また、既存の画像投稿サービスは”いいね”や”シェア機能”があるものが多く、どうしても他者の反応が介入してしまいます。自分の作品に集中してもらうためにあくまで画像管理の場としてのみ機能するようこころがけています。
            </Typography>
          </Typography>
          <Typography>
            現在はアカウントの登録・画像の投稿/編集/削除など基本的な機能しかありませんが、今後は画像閲覧ページの色や背景をカスタマイズできる機能を作成していく予定です。
          </Typography>
        </Stack>
        <Typography variant="body2">
          HTML/CSS, TypeScript, React, Ruby on Rails, AWS(S3), SQLite,
          PostgresSQL, Vercel, Render, MUI, GitHub
        </Typography>
      </Stack>
      <Stack spacing={1}>
        <Stack direction="row" alignItems={"center"} spacing={1}>
          <Typography variant="h5">AI Portal</Typography>
          <Button
            variant="outlined"
            startIcon={<PreviewIcon />}
            onClick={() => window.open("https://ai-portal.tech/")}
          >
            Preview
          </Button>
        </Stack>
        <Typography>
          家族と2人で開発中のWebアプリケーション。1日スプリントのスクラムでGW中(5日間)で開発しました。フロントエンドとスクラムマスターを担当。OpenAIをもっと気軽に触ってほしいという気持ちから開発に至りました。
        </Typography>
        <Typography variant="body2">
          HTML/CSS, TypeScript, React/Next.js, Node.js(非担当),
          PostgreSQL(非担当), OpenAI, Vercel, Render, MSW, MUI, GitHub
        </Typography>
      </Stack>
      <Stack spacing={1}>
        <Stack
          direction="row"
          alignItems={"center"}
          spacing={1}
          flexWrap={"wrap"}
        >
          <Typography variant="h5">omi.t portfolio</Typography>
          <Button
            variant="outlined"
            startIcon={<PreviewIcon />}
            onClick={() =>
              window.open("https://portfoliosite-cyan.vercel.app//")
            }
          >
            Preview
          </Button>
          <Button
            variant="outlined"
            startIcon={<GitHubIcon />}
            onClick={() =>
              window.open("https://github.com/omitea8/portfoliosite")
            }
          >
            GitHub
          </Button>
        </Stack>
        <Typography>
          このWebページです。ポートフォリオ用に作成しました。
        </Typography>
        <Typography variant="body2">
          HTML/CSS, TypeScript, React/Next.js, MUI, Vercel, GitHub
        </Typography>
      </Stack>
      <Stack spacing={1}>
        <Stack direction="row" alignItems={"center"} spacing={1}>
          <Typography variant="h5">勉強記録のNotion</Typography>
          <Button
            variant="outlined"
            startIcon={<PreviewIcon />}
            onClick={() =>
              window.open(
                "https://www.notion.so/programming-2c75a15d726944b7b1a386b35868c678?pvs=4"
              )
            }
          >
            Preview
          </Button>
        </Stack>
        <Typography>
          自分の記録のための日々の勉強や開発の記録のページです。学習した項目はSkillにて記載しています。
        </Typography>
      </Stack>
    </Stack>
  );
};

export default OutPutPage;
