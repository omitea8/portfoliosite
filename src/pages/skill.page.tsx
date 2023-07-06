import { Typography, Stack } from "@mui/material";
import Link from "next/link";

const StrongWords: React.FC<{ children: string }> = ({ children }) => {
  return (
    <Typography sx={{ fontWeight: "bold" }} component={"span"}>
      {children}
    </Typography>
  );
};

const SkillPage: React.FC = () => {
  return (
    <Stack spacing={3}>
      <Stack spacing={1}>
        <Typography variant="h4">Skill</Typography>
        <Typography variant="h5">Programming Language</Typography>
        <Typography>CSS, HTML5, JavaScript, TypeScript, Ruby</Typography>
        <Typography variant="h5">Framework / Library</Typography>
        <Typography>React, Next.js, Ruby on Rails, MUI</Typography>
        <Typography variant="h5">Infrastructure / Hosting</Typography>
        <Typography>GitHub, Git, AWS(S3), Vercel, Render</Typography>
        <Typography variant="h5">Other</Typography>
        <Typography>
          PostgreSQL, Visual Studio Code, Photoshop, Illustrator, After Effects,
          スクラム開発の基礎知識
        </Typography>
      </Stack>

      <Stack spacing={1}>
        <Typography variant="h4">Study</Typography>
        <Typography>
          2022/04~ <StrongWords>HTML5, CSS3</StrongWords> -
          <Link href={"https://www.udemy.com/share/102zAI/"} target="_blank">
            【JavaScript＆CSS】ガチで学びたい人のためのWEB開発徹底実践（フロントエンド編）
          </Link>
        </Typography>
        <Typography>
          2022/06~ <StrongWords>JavaScript, TypeScript, React</StrongWords> -
          <Link
            href={"https://oukayuka.booth.pm/items/2368045"}
            target="_blank"
          >
            りあクト!(1)
          </Link>
          ,{" "}
          <Link
            href={"https://oukayuka.booth.pm/items/2368019"}
            target="_blank"
          >
            りあクト!(2)
          </Link>
        </Typography>
        <Typography>
          2022/09~ <StrongWords>SQL全般(PostgreSQL)</StrongWords> -
          <Link href={"https://booth.pm/ja/items/1576397"} target="_blank">
            わかりみSQL
          </Link>
        </Typography>
        <Typography>
          2022/10~ <StrongWords>Webの仕組みについて</StrongWords> -
          <Link href={"https://amzn.asia/d/37McFoz"} target="_blank">
            WEB技術がこれ1冊でしっかりわかる教科書
          </Link>
        </Typography>
        <Typography>
          2022/10~ <StrongWords>Ruby on Rail</StrongWords> -{" "}
          <Link href={"https://railstutorial.jp/"} target="_blank">
            Railsチュートリアル
          </Link>
        </Typography>
        <Typography>
          2023/01~ <StrongWords>TypeScript, React,etc..</StrongWords> -
          <Link href={"https://caita.today/"} target="_blank">
            自主開発(caita)
          </Link>
        </Typography>
        <Typography>
          2023/04~ <StrongWords>JavaScript, アルゴリズム</StrongWords> -
          競プロ関連(Paiza)
        </Typography>
      </Stack>

      <Stack spacing={1}>
        <Typography variant="h4">Books</Typography>
        <Typography variant="body2">
          Studyと重複するものは省いています。
        </Typography>
        <ul>
          <li>
            <Link
              href={
                "https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-Japanese.pdf"
              }
              target="_blank"
            >
              スクラムガイド 2020
            </Link>
          </li>
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
