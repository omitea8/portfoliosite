import {
  Typography,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const StrongWords: React.FC<{ children: string }> = ({ children }) => {
  return (
    <Typography sx={{ fontWeight: "bold" }} component={"span"}>
      {children}
    </Typography>
  );
};

const SkillPage: React.FC = () => {
  // アコーディオンの設定
  const [expanded, setExpanded] = useState<string | false>(false);
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Stack spacing={3}>
      <Stack spacing={1}>
        <Typography variant="h4">Skill</Typography>
        <Typography variant="h5">Programming Language</Typography>
        <Typography>CSS, HTML5, JavaScript, TypeScript, Ruby</Typography>
        <Typography variant="h5">Framework / Library</Typography>
        <Typography>React, Next.js, Ruby on Rails, MUI</Typography>
        <Typography variant="h5">Infrastructure / Hosting</Typography>
        <Typography>GitHub, Git, AWS(S3), Vercel, Heroku, Render</Typography>
        <Typography variant="h5">Other</Typography>
        <Typography>
          PostgreSQL, Visual Studio Code, Photoshop, Illustrator, After Effects,
          スクラム開発の基礎知識
        </Typography>
      </Stack>

      <Stack spacing={1}>
        <Typography variant="h4">Study</Typography>
        <Accordion
          expanded={expanded === "study1"}
          onChange={handleChange("study1")}
          sx={{ boxShadow: "none" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel-content"
          >
            <Typography>2022/04~ HTML5, CSS3</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              HTMLは学生のころ少しだけ触ったことがあったため、比較的入りやすいと思いまずはHTMLとCSSの基礎を学びました。
            </Typography>
            <Link href={"https://www.udemy.com/share/102zAI/"} target="_blank">
              【JavaScript&CSS】ガチで学びたい人のためのWEB開発徹底実践（フロントエンド編）
            </Link>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "study2"}
          onChange={handleChange("study2")}
          sx={{ boxShadow: "none" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel-content"
          >
            <Typography>2022/06~ JavaScript, TypeScript, React</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              2022年のフロントエンドはReactやNext.jsなどが多く使われていると知り、今回はReactを選択しました。また、JavaScriptの基礎は他の言語でも応用できると思い、ひとまずはReactで使う技術のみに集中しました。
            </Typography>
            <Stack direction={"row"} spacing={1}>
              <Link
                href={"https://oukayuka.booth.pm/items/2368045"}
                target="_blank"
              >
                りあクト!(1)
              </Link>
              <Link
                href={"https://oukayuka.booth.pm/items/2368019"}
                target="_blank"
              >
                りあクト!(2)
              </Link>
            </Stack>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "study3"}
          onChange={handleChange("study3")}
          sx={{ boxShadow: "none" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel-content"
          >
            <Typography>2022/09~ SQL全般(PostgreSQL)</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              実際にアプリケーションを作成するときに関連する技術全体の知識があった方が良いと考えたため、データベースについて基礎的なことを学びました。
            </Typography>
            <Link href={"https://booth.pm/ja/items/1576397"} target="_blank">
              わかりみSQL
            </Link>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "study4"}
          onChange={handleChange("study4")}
          sx={{ boxShadow: "none" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel-content"
          >
            <Typography>2022/10~ Webの仕組みについて</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Webの仕組みや用語について体系的に学んだ経験がなかったため、どうやってWebが成り立っているかなど基礎的なことを学びました。
            </Typography>
            <Link href={"https://amzn.asia/d/37McFoz"} target="_blank">
              WEB技術がこれ1冊でしっかりわかる教科書
            </Link>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "study5"}
          onChange={handleChange("study5")}
          sx={{ boxShadow: "none" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel-content"
          >
            <Typography>2022/10~ Ruby on Rails</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              簡単なWebアプリケーション作成を通してバックエンドの技術やフロントエンドとの関わりを知るために学びました。日本企業ではRuby
              on
              Railsでのアプリケーション開発も活発と知り、このチュートリアルを選択しました。
            </Typography>
            <Link href={"https://railstutorial.jp/"} target="_blank">
              Railsチュートリアル
            </Link>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "study6"}
          onChange={handleChange("study6")}
          sx={{ boxShadow: "none" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel-content"
          >
            <Typography>2022/12~ スクラム開発について</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              認定スクラムマスターの資格保有者とスクラムガイドの読み合わせを通してスクラムの基礎について学びました。開発手法としてアジャイル開発やスクラムが多く使われていると知り学んでおいた方が良いと感じたためこの読み合わせを開催してもらいました。また、自主開発においてもスクラム開発で行っています。
            </Typography>
            <Link
              href={
                "https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-Japanese.pdf"
              }
              target="_blank"
            >
              スクラムガイド 2020
            </Link>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "study7"}
          onChange={handleChange("study7")}
          sx={{ boxShadow: "none" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel-content"
          >
            <Typography>
              2023/01~ 自主開発(画像投稿Webアプリケーション)
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              学んだ知識を活かしてさらに実践的なものを作ろうと考えていたためこの開発に至りました。また、このアプリケーションが自身のエンジニアリングの動機でもあります。
            </Typography>
            <Link href={"https://caita.today/"} target="_blank">
              自主開発(caita)
            </Link>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "study8"}
          onChange={handleChange("study8")}
          sx={{ boxShadow: "none" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel-content"
          >
            <Typography>2023/04~ アルゴリズム,競プロ関連(Paiza)</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              技術力や実装力が足りないと感じたため、競プロを始めました。
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Stack>

      <Stack spacing={1}>
        <Typography variant="h4">Books</Typography>
        <Typography variant="body2">
          Studyと重複するものは省いています。
        </Typography>
        <ul>
          <li>
            <Link href={"https://amzn.asia/d/9UkRVZK"} target="_blank">
              リーダブルコード
            </Link>
          </li>
          <li>
            <Link href={"https://amzn.asia/d/idC4ZEk"} target="_blank">
              アジャイルサムライ(途中)
            </Link>
          </li>
        </ul>
      </Stack>
    </Stack>
  );
};

export default SkillPage;
