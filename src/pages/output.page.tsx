import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PreviewIcon from "@mui/icons-material/Preview";
import GitHubIcon from "@mui/icons-material/GitHub";
import Image from "next/image";
import { useState } from "react";

const OutPutPage: React.FC = () => {
  // アコーディオンの設定
  const [expanded, setExpanded] = useState<string | false>(false);
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Stack spacing={6}>
      <Typography variant="h4">Output</Typography>
      {/* caita */}
      <Stack spacing={2}>
        <Typography variant="h5">caita</Typography>
        <Image
          src="/caita2.png"
          alt="caita"
          width={400}
          height={200}
          style={{ boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.2)" }}
        />
        <Stack
          direction="row"
          alignItems={"center"}
          spacing={1}
          flexWrap={"wrap"}
        >
          <Button
            variant="outlined"
            sx={{ textTransform: "none" }}
            startIcon={<PreviewIcon />}
            onClick={() => window.open("https://caita.today/")}
          >
            visit
          </Button>
          <Button
            variant="outlined"
            sx={{ textTransform: "none" }}
            startIcon={<GitHubIcon />}
            onClick={() =>
              window.open("https://github.com/omitea8/caita_frontend")
            }
          >
            frontend
          </Button>
          <Button
            variant="outlined"
            sx={{ textTransform: "none" }}
            startIcon={<GitHubIcon />}
            onClick={() =>
              window.open("https://github.com/omitea8/caita_backend")
            }
          >
            backend
          </Button>
        </Stack>
        <Stack spacing={1}>
          <Typography variant="body2">
            HTML, CSS, TypeScript, React, Ruby on Rails, AWS(S3), SQLite,
            PostgresSQL, Vercel, Render, MUI, GitHub
          </Typography>
          <Accordion
            expanded={expanded === "caita_about"}
            onChange={handleChange("caita_about")}
            sx={{ boxShadow: "none" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel-content"
            >
              <Typography>概要</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                画像の投稿・共有のWebアプリケーション。操作も見た目もシンプルに、自分の好みに合わせることができる画像投稿サービスを目指しています。
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "caita_function"}
            onChange={handleChange("caita_function")}
            sx={{ boxShadow: "none" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel-content"
            >
              <Typography>機能</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                twitter連携(oauth2.0)、アカウントの登録、画像(キャプション)の投稿、投稿の編集、投稿削除、ログイン、ログアウト。
              </Typography>
              <Typography>
                今後は画像閲覧ページの色や背景をカスタマイズできる機能を作成していく予定です。
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "caita_concept"}
            onChange={handleChange("caita_concept")}
            sx={{ boxShadow: "none" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel-content"
            >
              <Typography>目的とコンセプト</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                既存の画像投稿サービスに自分の好みにぴったりとくるものがなかったため作成に至りました。
                既存の画像投稿サービスは、見た目を好みに変えられないか、好みに変えるには複雑すぎるものが多く、簡単に自分の好みに合わせられるものがありません。
                このアプリケーションでは、閲覧ページの色や背景、サムネイルサイズなどを簡単に変えられ画像投稿者らしい閲覧ページを作ることができるようになる予定です。
              </Typography>
              <Typography>
                また、既存の画像投稿サービスはSNSとしての側面が強いものが多く、どうしても他者の反応が介入してしまいます。
                自分の作品に集中してもらうためにあくまで画像管理の場としてのみ機能するよう心がけ、また他者への宣伝もできやすいサービスを目指しています。
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "caita_assignment"}
            onChange={handleChange("caita_assignment")}
            sx={{ boxShadow: "none" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel-content"
            >
              <Typography>難しかった課題</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                ロジックのフローを考えるところが難しかったです。シーケンス図を書き、フロントエンドやバックエンド、データベースなどとどうつながるかを整理しながらひとつひとつ機能を作っていきました。悪意のある攻撃から守るための方法を勉強したり、外部のAPIについて調べたりと機能を作るだけでなくさまざまな調査が必要になることがわかりました。また、この調査がとても大変で、今でも非常にむずかしいと感じています。
              </Typography>
              <Typography></Typography>
            </AccordionDetails>
          </Accordion>
        </Stack>
      </Stack>

      {/* AI Portal */}
      <Stack spacing={2}>
        <Typography variant="h5">AI Portal</Typography>
        <Image
          src="/ai1.png"
          alt="ai portal"
          width={400}
          height={200}
          style={{ boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.2)" }}
        />
        <Stack direction="row" alignItems={"center"} spacing={1}>
          <Button
            variant="outlined"
            sx={{ textTransform: "none" }}
            startIcon={<PreviewIcon />}
            onClick={() => window.open("https://ai-portal.tech/")}
          >
            visit
          </Button>
        </Stack>
        <Typography variant="body2">
          HTML/CSS, TypeScript, React/Next.js, Node.js(非担当),
          PostgreSQL(非担当), OpenAI, Vercel, Render, MSW, MUI, GitHub
        </Typography>
        <Stack spacing={1}>
          <Accordion
            expanded={expanded === "ai_about"}
            onChange={handleChange("ai_about")}
            sx={{ boxShadow: "none" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel-content"
            >
              <Typography>概要</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                OpenAIを使って誰でも簡単にAIと会話ができるサービス。簡単な指定・設定を書くだけでAIと1往復の簡単な会話をすうことができます。また、作った設定は公開することができ幅広く作ったAIで遊ぶことができます。
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "ai_function"}
            onChange={handleChange("ai_function")}
            sx={{ boxShadow: "none" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel-content"
            >
              <Typography>機能</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                twitter連携(oauth2.0)、アカウントの登録、AIの作成、AIの公開、AIの削除
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "ai_concept"}
            onChange={handleChange("ai_concept")}
            sx={{ boxShadow: "none" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel-content"
            >
              <Typography>目的とコンセプト</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                家族と2人で作成したWebアプリケーション。フロントエンドとスクラムマスターを担当。
              </Typography>
              <Typography>
                詳しい技術がわからなくても誰でも簡単にOpenAIに気軽に触れることをコンセプトに開発に至りました。OpenAIに触って独自のAIを作りたい人は簡単なプロンプトを入力しただけで自分だけのAIを作ることができ、ただ触って楽しみたい人はそこでできたAIを使って1往復の会話をすることができます。
              </Typography>
              <Typography>
                OpenAIを使って何かアプリケーションを作ってみたかったこと、複数人で開発をしてみたかったこと、1日スプリントでスクラム開発をしてみたかったことなども開発のきっかけです。
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "ai_assignment"}
            onChange={handleChange("ai_assignment")}
            sx={{ boxShadow: "none" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel-content"
            >
              <Typography>難しかった課題</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                開発は1日スプリントのスクラムでGW中(5日間)で開発しました。2人で開発することで、齟齬があったり方針が違ったりなど複数人で開発することの難しさがありました。開発中の困ったことやうまくいかなかっったことなどは毎日のスプリントレトロスペクティブやスプリントレビューで率直に話し合うことにし、すれ違いや摩擦を少なくするよう努めました。また、コードレビューやペアプログラミングを活用しお互いの意見を出し合ったり評価をしてもらうことで、お互いにとって良いコードを書けるよう努めました。複数人で開発することは一人で開発することとは違う問題がありましたが、ひとりひとりが気持ちよく開発できることを心がけ、開発中は楽しく開発ができることができました。
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Stack>
      </Stack>

      {/* portfolio Site */}
      <Stack spacing={2}>
        <Typography variant="h5">omi.t portfolio</Typography>
        <Image
          src="/portfolio1.png"
          alt="PortfolioSite"
          width={400}
          height={200}
          style={{ boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.2)" }}
        />
        <Stack
          direction="row"
          alignItems={"center"}
          spacing={1}
          flexWrap={"wrap"}
        >
          <Button
            variant="outlined"
            sx={{ textTransform: "none" }}
            startIcon={<PreviewIcon />}
            onClick={() =>
              window.open("https://portfoliosite-cyan.vercel.app//")
            }
          >
            visit
          </Button>
          <Button
            variant="outlined"
            sx={{ textTransform: "none" }}
            startIcon={<GitHubIcon />}
            onClick={() =>
              window.open("https://github.com/omitea8/portfoliosite")
            }
          >
            GitHub
          </Button>
        </Stack>
        <Typography variant="body2">
          HTML/CSS, TypeScript, React/Next.js, MUI, Vercel, GitHub
        </Typography>
        <Stack spacing={1}>
          <Typography>
            このWebページです。ポートフォリオ用に作成しました。
          </Typography>
        </Stack>
      </Stack>

      {/* Notion */}
      <Stack spacing={2}>
        {" "}
        <Typography variant="h5">勉強記録のNotion</Typography>
        <Stack direction="row" alignItems={"center"} spacing={1}>
          <Button
            variant="outlined"
            sx={{ textTransform: "none" }}
            startIcon={<PreviewIcon />}
            onClick={() =>
              window.open(
                "https://www.notion.so/programming-2c75a15d726944b7b1a386b35868c678?pvs=4"
              )
            }
          >
            visit
          </Button>
        </Stack>
        <Stack spacing={1}>
          <Typography>
            自分の記録のための日々の勉強や開発の記録のページです。学習した項目はSkillにて記載しています。
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default OutPutPage;
