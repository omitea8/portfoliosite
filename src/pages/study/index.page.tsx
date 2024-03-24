import { Stack, Typography } from "@mui/material";
import { StudyElement } from "./StudyElement";
import { ListElement } from "./ListElement";
import { Timeline, timelineItemClasses } from "@mui/lab";
import { Logo } from "../../components/Logo";

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
            description="学んだ知識を活かしてさらに実践的なものを作ろうと考えていたためこの開発に至りました。また、このアプリケーションをつくることが自身のエンジニアリングの動機でもあります。"
          />
          {/* スクラムガイド */}
          <StudyElement
            day="2022/12-"
            title="「スクラムガイド2020」でスクラム開発の基礎について学ぶ"
            description="
              認定スクラムマスターの資格保有者と一緒に行ったスクラムガイドの読み合わせを通してスクラムの基礎について学びました。開発手法としてアジャイル開発やスクラムが多く使われていると知り学んでおいた方が良いと感じたためこの読み合わせを開催しました。また、自主開発においても一部スクラム開発に則り行っています。"
          />
          {/* Railsチュートリアル */}
          <StudyElement
            url="https://www.notion.so/Rails-2e2965d4328942968e8818517dd8b120?pvs=4"
            day="2022/10-"
            title="「Rails Tutorial」でRuby on Railsの基礎を学ぶ"
            description="
              簡単なWebアプリケーション作成を通してバックエンドの技術やフロントエンドとの関わりを知るために学びました。日本企業ではRuby
              on Railsでのアプリケーション開発も活発と知り、このチュートリアルを選択しました。"
          />
          {/* WEB技術がこれ1冊でしっかりわかる教科書 */}
          <StudyElement
            url="https://www.notion.so/WEB-1-8c46853fb6974873a8bca5debfefac91?pvs=4"
            day="2022/10-"
            title="書籍「WEB技術がこれ1冊でしっかりわかる教科書」でWebの仕組みについて学ぶ"
            description="
              Webの仕組みや用語について体系的に学んだ経験がなかったため、どうやってWebが成り立っているかなど基礎的なことを学びました。"
          />
          {/* わかりみSQL */}
          <StudyElement
            url="https://www.notion.so/SQL-aa0b4ce458834185befd4c25eb1d0ac8?pvs=4"
            day="2022/09-"
            title="書籍「わかりみSQL」でSQL(PostgreSQL)を学ぶ"
            description="
              実際にアプリケーションを作成するときに関連する技術全体の知識があった方が良いと考えたため、データベースについて基礎的なことを学びました。"
          />
          {/* りあクト！ */}
          <StudyElement
            url="https://www.notion.so/70a624b08c8e4039b45ecdb24e749f39?pvs=4"
            day="2022/06-"
            title="書籍「りあクト!」でJavaScript,TypeScript,Reactの基礎を学ぶ"
            description="
              近年のフロントエンドはReactやNext.jsなどが多く使われていると知り汎用性を考え、今回はReactを選択しました。また、JavaScriptの基礎は他の言語でも応用できると思い、ひとまずはReactで使う技術のみに集中しました。"
          />
          {/* 【JavaScript&CSS】ガチで学びたい人のためのWEB開発徹底実践（フロントエンド編） */}
          <StudyElement
            url="https://www.notion.so/JavaScript-CSS-WEB-0e63a6dcb35c484895c30494ed0dcb85?pvs=4"
            day="2022/04-"
            title="UdemyでHTML5とCSS3の基礎を学ぶ"
            description="
              HTMLは学生のころ少しだけ触ったことがあったため比較的入りやすいと思い、まずはHTMLとCSSの基礎を学びました。"
          />
        </Timeline>
      </Stack>

      <Typography variant="h5">読書リスト</Typography>
      <Stack spacing={1}>
        <ListElement
          name="りあクト!(1)"
          url="https://oukayuka.booth.pm/items/2368045"
          progress={false}
        />
        <ListElement
          name="りあクト!(2)"
          url="https://oukayuka.booth.pm/items/2368019"
          progress={false}
        />
        <ListElement
          name="わかりみSQL"
          url="https://booth.pm/ja/items/1576397"
          progress={false}
        />
        <ListElement
          name="WEB技術がこれ1冊でしっかりわかる教科書"
          url="https://amzn.asia/d/37McFoz"
          progress={false}
        />
        <ListElement
          name="スクラムガイド 2020"
          url="https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-Japanese.pdf"
          progress={false}
        />
        <ListElement
          name="リータブルコード"
          url="https://amzn.asia/d/9UkRVZK"
          progress={false}
        />
        <ListElement
          name="アジャイルサムライ"
          url="https://amzn.asia/d/idC4ZEk"
          progress={false}
        />
        <ListElement
          name="JavaScript Promiseの本"
          url="https://azu.github.io/promises-book/"
          progress={false}
        />
        <ListElement
          name="フロントエンド開発のためのテスト入門 今からでも知っておきたい自動テスト戦略の必須知識"
          url="https://amzn.asia/d/6DK0LpD"
          progress={false}
        />
        <ListElement
          name="体系的に学ぶ 安全なWebアプリケーションの作り方 脆弱性が生まれる原理と対策の実践"
          url="https://amzn.asia/d/fffQzny"
          progress={true}
        />
        <ListElement
          name="テスト駆動開発"
          url="https://amzn.asia/d/iZoWN64"
          progress={true}
        />
      </Stack>

      <Typography variant="h5">参加勉強会</Typography>
      <Stack spacing={1}>
        <ListElement
          name="Web TECH FORUM 2023 Autumn"
          url="https://grapecity-dev-tools.connpass.com/event/295451/"
          progress={false}
        />
        <ListElement
          name="★再増枠★Frontend Night 〜Webフロントエンドテスト編〜"
          url="https://yojo.connpass.com/event/295783/"
          progress={false}
        />
        <ListElement
          name="LT&ディスカッション5ラウンド!うひょさん・よしこさんと改めて考えるReactコンポーネント設計"
          url="https://offers.connpass.com/event/298939/"
          progress={false}
        />
        <ListElement
          name="takepepeさんと振り返る フロントエンドの書くべきだったテスト、書かなくてよかったテスト"
          url="https://offers.connpass.com/event/299909/"
          progress={false}
        />
        <ListElement
          name="Zenn,しずかなインターネット「どうやって開発したの？」開発者catnoseさんにきいてみた"
          url="https://findy.connpass.com/event/306774/"
          progress={false}
        />
        <ListElement
          name="フロントエンドの技術選定 ~2023を振り返る~ Lunch LT"
          url="https://findy.connpass.com/event/306714/"
          progress={false}
        />
        <ListElement
          name="プロダクトマネジメントのすべて著者 及川さんに聞く 技術から価値を生み出すエンジニアになるには"
          url="https://offers.connpass.com/event/307595/"
          progress={false}
        />
        <ListElement
          name="インシデントマネジメント 事態収拾のための取り組みに迫る Lunch LT"
          url="https://findy.connpass.com/event/309400/"
          progress={true}
        />
      </Stack>
    </Stack>
  );
};

export default studyPage;
