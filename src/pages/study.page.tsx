import { Stack, Typography } from "@mui/material";
import { StudyElement } from "./components/StudyElement";
import { BooksElement } from "./components/BookElement";
import { Timeline, timelineItemClasses } from "@mui/lab";
import { Logo } from "./components/Logo";

const studyPage = () => {
  return (
    <Stack spacing={3}>
      <Logo size="h3" name="Study" />
      <Stack spacing={3}>
        <Timeline
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          }}
        >
          {/* フロントエンドのテスト */}
          <StudyElement
            url="https://www.notion.so/c23a9d77e3e74ba3bdf83a990753171b?pvs=4"
            day="2023/10-"
            title="フロントエンド開発のテストについて学ぶ"
            description="フロントエンドのテストについての手法や使い分けなど具体的なことについて知識不足を感じたため学習を始めました。"
          />
          {/* paiza */}
          <StudyElement
            url="https://www.notion.so/paiza-eacece5acd324c2fa81f177120371816?pvs=4"
            day="2023/04-"
            title="paiza・競プロでアルゴリズムや実力を伸ばす"
            description="技術力や実装力が足りないと感じたため、競プロを始めました。"
          />
          {/* caita */}
          <StudyElement
            url="https://www.notion.so/caita-1ccf1ed783a543fc98e7a6057fdc78f0?pvs=4"
            day="2023/01-"
            title="自主開発(画像投稿Webアプリケーション)を開始"
            description="学んだ知識を活かしてさらに実践的なものを作ろうと考えていたためこの開発に至りました。また、このアプリケーションが自身のエンジニアリングの動機でもあります。"
          />
          {/* スクラムガイド */}
          <StudyElement
            day="2022/12-"
            title="スクラムガイド2020でスクラム開発の基礎について学ぶ"
            description="
              認定スクラムマスターの資格保有者とスクラムガイドの読み合わせを通してスクラムの基礎について学びました。開発手法としてアジャイル開発やスクラムが多く使われていると知り学んでおいた方が良いと感じたためこの読み合わせを開催してもらいました。また、自主開発においてもスクラム開発で行っています。"
          />
          {/* Railsチュートリアル */}
          <StudyElement
            url="https://www.notion.so/Rails-2e2965d4328942968e8818517dd8b120?pvs=4"
            day="2022/10-"
            title="Rails TutorialでRuby on Railsの基礎を学ぶ"
            description="
              簡単なWebアプリケーション作成を通してバックエンドの技術やフロントエンドとの関わりを知るために学びました。日本企業ではRuby
              on
              Railsでのアプリケーション開発も活発と知り、このチュートリアルを選択しました。"
          />
          {/* WEB技術がこれ1冊でしっかりわかる教科書 */}
          <StudyElement
            url="https://www.notion.so/WEB-1-8c46853fb6974873a8bca5debfefac91?pvs=4"
            day="2022/10-"
            title="書籍WEB技術がこれ1冊でしっかりわかる教科書でWebの仕組みについて学ぶ"
            description="
              Webの仕組みや用語について体系的に学んだ経験がなかったため、どうやってWebが成り立っているかなど基礎的なことを学びました。"
          />
          {/* わかりみSQL */}
          <StudyElement
            url="https://www.notion.so/SQL-aa0b4ce458834185befd4c25eb1d0ac8?pvs=4"
            day="2022/09-"
            title="書籍わかりみSQLでSQL(PostgreSQL)を学ぶ"
            description="
              実際にアプリケーションを作成するときに関連する技術全体の知識があった方が良いと考えたため、データベースについて基礎的なことを学びました。"
          />
          {/* りあクト！ */}
          <StudyElement
            url="https://www.notion.so/70a624b08c8e4039b45ecdb24e749f39?pvs=4"
            day="2022/06-"
            title="書籍りあクト!でJavaScript,TypeScript,Reactの基礎を学ぶ"
            description="
              近年のフロントエンドはReactやNext.jsなどが多く使われていると知り汎用性を考え、今回はReactを選択しました。また、JavaScriptの基礎は他の言語でも応用できると思い、ひとまずはReactで使う技術のみに集中しました。"
          />
          {/* 【JavaScript&CSS】ガチで学びたい人のためのWEB開発徹底実践（フロントエンド編） */}
          <StudyElement
            url="https://www.notion.so/JavaScript-CSS-WEB-0e63a6dcb35c484895c30494ed0dcb85?pvs=4"
            day="2022/04-"
            title="Udemyの動画でHTML5とCSS3の基礎を学ぶ"
            description="
              HTMLは学生のころ少しだけ触ったことがあったため、比較的入りやすいと思いまずはHTMLとCSSの基礎を学びました。"
          />
        </Timeline>
      </Stack>

      <Typography variant="h5">読書リスト</Typography>
      <Stack spacing={1}>
        <BooksElement
          bookName="りあクト!(1)"
          url="https://oukayuka.booth.pm/items/2368045"
          progress={false}
          // review={<Typography>ああ</Typography>}
        />
        <BooksElement
          bookName="りあクト!(2)"
          url="https://oukayuka.booth.pm/items/2368019"
          progress={false}
          // review={<Typography>ああ</Typography>}
        />
        <BooksElement
          bookName="わかりみSQL"
          url="https://booth.pm/ja/items/1576397"
          progress={false}
          // review={<Typography>ああ</Typography>}
        />
        <BooksElement
          bookName="WEB技術がこれ1冊でしっかりわかる教科書"
          url="https://amzn.asia/d/37McFoz"
          progress={false}
          // review={<Typography>ああ</Typography>}
        />
        <BooksElement
          bookName="スクラムガイド 2020"
          url="https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-Japanese.pdf"
          progress={false}
          // review={<Typography>ああ</Typography>}
        />
        <BooksElement
          bookName="リータブルコード"
          url="https://amzn.asia/d/9UkRVZK"
          progress={false}
          // review={<Typography>ああ</Typography>}
        />
        <BooksElement
          bookName="アジャイルサムライ"
          url="https://amzn.asia/d/idC4ZEk"
          progress={false}
          // review={
          //   <Typography>
          //     この本を読んでアジャイルのやり方の知識を得るのは簡単なことだが、継続的な改善やよりよいコードを書くという気持ちを忘れないことは難しいと感じた。すぐには身につかないと思うが、快適な開発のためにも、常に改善への努力を忘れないようにしたい。
          //   </Typography>
          // }
        />
        <BooksElement
          bookName="フロントエンド開発のためのテスト入門 今からでも知っておきたい自動テスト戦略の必須知識"
          url="https://amzn.asia/d/6DK0LpD"
          progress={true}
          // review={<Typography>ああ</Typography>}
        />
      </Stack>
    </Stack>
  );
};

export default studyPage;
