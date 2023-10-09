import { Typography, Stack } from "@mui/material";
import Link from "next/link";
import { StudyElement } from "./components/StudyElement";
import { BooksElement } from "./components/BooksElement";

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
        <Typography variant="h3">Skill</Typography>
        <Typography variant="h6" fontWeight={"bold"}>
          プログラミング言語
        </Typography>
        <Typography>CSS, HTML5, JavaScript, TypeScript, Ruby</Typography>
        <Typography variant="h6" fontWeight={"bold"}>
          フレームワーク / ライブラリー
        </Typography>
        <Typography>React, Next.js, Ruby on Rails, MUI</Typography>
        <Typography variant="h6" fontWeight={"bold"}>
          インフラ
        </Typography>
        <Typography>AWS(S3), Vercel, Heroku, Render</Typography>
        <Typography variant="h6" fontWeight={"bold"}>
          その他
        </Typography>
        <Typography>
          GitHub, Git, PostgreSQL, Visual Studio Code, Photoshop, Illustrator,
          After Effects, スクラム開発の基礎知識
        </Typography>
      </Stack>

      <Typography variant="h4">学習の履歴</Typography>
      <Stack spacing={4}>
        {/* 【JavaScript&CSS】ガチで学びたい人のためのWEB開発徹底実践（フロントエンド編） */}
        <StudyElement
          url="https://www.notion.so/JavaScript-CSS-WEB-0e63a6dcb35c484895c30494ed0dcb85?pvs=4"
          day="2022/06-"
          title="Udemyの動画でHTML5とCSS3の基礎を学ぶ"
          description={
            <Typography>
              HTMLは学生のころ少しだけ触ったことがあったため、比較的入りやすいと思いまずはHTMLとCSSの基礎を学びました。
            </Typography>
          }
          reference="https://www.udemy.com/share/102zAI/"
          referenceTitle="【JavaScript&CSS】ガチで学びたい人のためのWEB開発徹底実践（フロントエンド編）"
        />
        {/* りあクト！ */}
        <StudyElement
          url="https://www.notion.so/70a624b08c8e4039b45ecdb24e749f39?pvs=4"
          day="2022/06-"
          title="書籍りあクト!でJavaScript,TypeScript,Reactの基礎を学ぶ"
          description={
            <Typography>
              2022年のフロントエンドはReactやNext.jsなどが多く使われていると知り汎用性を考え、今回はReactを選択しました。また、JavaScriptの基礎は他の言語でも応用できると思い、ひとまずはReactで使う技術のみに集中しました。
            </Typography>
          }
          reference="https://oukayuka.booth.pm/"
          referenceTitle="くるみ割り書房 ft.React"
        />
        {/* わかりみSQL */}
        <StudyElement
          url="https://www.notion.so/SQL-aa0b4ce458834185befd4c25eb1d0ac8?pvs=4"
          day="2022/09-"
          title="書籍わかりみSQLでSQL(PostgreSQL)を学ぶ"
          description={
            <Typography>
              実際にアプリケーションを作成するときに関連する技術全体の知識があった方が良いと考えたため、データベースについて基礎的なことを学びました。
            </Typography>
          }
          reference="https://booth.pm/ja/items/1576397"
          referenceTitle="わかりみSQL"
        />
        {/* WEB技術がこれ1冊でしっかりわかる教科書 */}
        <StudyElement
          url="https://www.notion.so/WEB-1-8c46853fb6974873a8bca5debfefac91?pvs=4"
          day="25022/10-"
          title="書籍WEB技術がこれ1冊でしっかりわかる教科書でWebの仕組みについて学ぶ"
          description={
            <Typography>
              Webの仕組みや用語について体系的に学んだ経験がなかったため、どうやってWebが成り立っているかなど基礎的なことを学びました。
            </Typography>
          }
          reference="https://amzn.asia/d/37McFoz"
          referenceTitle="WEB技術がこれ1冊でしっかりわかる教科書"
        />
        {/* Railsチュートリアル */}
        <StudyElement
          url="https://www.notion.so/Rails-2e2965d4328942968e8818517dd8b120?pvs=4"
          day="2022/10-"
          title="Rails TutorialでRuby on Railsの基礎を学ぶ"
          description={
            <Typography>
              簡単なWebアプリケーション作成を通してバックエンドの技術やフロントエンドとの関わりを知るために学びました。日本企業ではRuby
              on
              Railsでのアプリケーション開発も活発と知り、このチュートリアルを選択しました。
            </Typography>
          }
          reference="https://railstutorial.jp/"
          referenceTitle="Rails Tutorial"
        />
        {/* スクラムガイド */}
        <StudyElement
          day="2022/12-"
          title="スクラムガイド2020でスクラム開発の基礎について学ぶ"
          description={
            <Typography>
              認定スクラムマスターの資格保有者とスクラムガイドの読み合わせを通してスクラムの基礎について学びました。開発手法としてアジャイル開発やスクラムが多く使われていると知り学んでおいた方が良いと感じたためこの読み合わせを開催してもらいました。また、自主開発においてもスクラム開発で行っています。
            </Typography>
          }
          reference="https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-Japanese.pdf"
          referenceTitle="スクラムガイド2020"
        />
        {/* caita */}
        <StudyElement
          url="https://www.notion.so/caita-1ccf1ed783a543fc98e7a6057fdc78f0?pvs=4"
          day="2023/01-"
          title="自主開発(画像投稿Webアプリケーション)を開始"
          description={
            <Typography>
              学んだ知識を活かしてさらに実践的なものを作ろうと考えていたためこの開発に至りました。また、このアプリケーションが自身のエンジニアリングの動機でもあります。
            </Typography>
          }
          reference="https://caita.today/"
          referenceTitle="自主開発(caita)"
        />
        {/* paiza */}
        <StudyElement
          url="https://www.notion.so/paiza-eacece5acd324c2fa81f177120371816?pvs=4"
          day="2023/04-"
          title="paiza・競プロでアルゴリズムや実力を伸ばす"
          description={
            <Typography>
              技術力や実装力が足りないと感じたため、競プロを始めました。
            </Typography>
          }
        />
      </Stack>

      <Stack spacing={1}>
        <Typography variant="h5">読書リスト</Typography>
        <BooksElement
          bookName="リータブルコード"
          url="https://amzn.asia/d/9UkRVZK"
          // review={<Typography>ああ</Typography>}
        />
        <BooksElement
          bookName="アジャイルサムライ"
          url="https://amzn.asia/d/idC4ZEk"
          // review={<Typography>ああ</Typography>}
        />
        <BooksElement
          bookName="りあクト!(1)"
          url="https://oukayuka.booth.pm/items/2368045"
          // review={<Typography>ああ</Typography>}
        />
        <BooksElement
          bookName="りあクト!(2)"
          url="https://oukayuka.booth.pm/items/2368019"
          // review={<Typography>ああ</Typography>}
        />
        <BooksElement
          bookName="わかりみSQL"
          url="https://booth.pm/ja/items/1576397"
          // review={<Typography>ああ</Typography>}
        />
        <BooksElement
          bookName="WEB技術がこれ1冊でしっかりわかる教科書"
          url="https://amzn.asia/d/37McFoz"
          // review={<Typography>ああ</Typography>}
        />
        <BooksElement
          bookName="スクラムガイド 2020"
          url="https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-Japanese.pdf"
          // review={<Typography>ああ</Typography>}
        />
      </Stack>
    </Stack>
  );
};

export default SkillPage;
