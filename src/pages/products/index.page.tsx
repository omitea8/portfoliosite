import { Stack, Typography } from "@mui/material";
import { ProductsElement } from "./ProductsElement";
import { Logo } from "../../components/Logo";
import Link from "next/link";

const ProductsPage: React.FC = () => {
  return (
    <Stack spacing={5}>
      <Logo size="h3" name="Products" />
      <Stack spacing={17}>
        {/* caita */}
        <ProductsElement
          name="caita"
          imageSource="/caita2.png"
          url="https://caita.today/"
          frontendRepositoryUrl="https://github.com/omitea8/caita_frontend"
          backendRepositoryUrl="https://github.com/omitea8/caita_backend"
          tech={[
            "HTML",
            "CSS",
            "TypeScript",
            "React",
            "Ruby on Rails",
            "AWS(S3)",
            "SQLite",
            "PostgreSQL",
            "Vercel",
            "Render",
            "MUI",
            "GitHub",
          ]}
          overview="画像投稿Webアプリケーション"
          usage={[
            "画像とキャプションの投稿",
            "投稿の編集",
            "投稿削除",
            "X(旧Twitter)連携(OAuth2.0)",
            "アカウントの登録",
            "ログイン",
            "ログアウト",
          ]}
          concept={
            <Typography>
              画像の閲覧画面を投稿者が簡単にカスタマイズでき、且つ画像投稿に特化した画像投稿サービスが欲しかったため作成に至りました。既存の画像投稿サービスは、過剰な広告や閲覧者とのコミュニケーション、ランキングなどどうしても他者の介入があります。もちろんそういった機能は必要とされていますが、このアプリケーションでは投稿者と投稿された画像に集中してもらいたい、投稿者自身が自分の作品と向き合える場所にしたいという想いで制作しています。簡単な操作で投稿者が自分らしさを出せることを目指しています。
            </Typography>
          }
          problems={
            <Stack spacing={1}>
              <Stack>
                <Typography fontWeight={"bold"}>
                  1. 複雑なロジックの構築
                </Typography>
                <Typography>
                  機能を実装するためにプログラムの流れを計画する作業が想像していたよりも大変でした。フロントエンドやバックエンドやデータベース、その他外部のシステムとの連携などをどういう順番で呼び出すのかやどういった形で返ってくるのか、受け取った後どうするのかなど考えることがたくさんありました。
                  全体の流れを
                  <Link
                    href={
                      "https://www.notion.so/a1ea5d4e833741319088f60939ab9b48?pvs=4"
                    }
                    target="_block"
                  >
                    シーケンス図
                  </Link>
                  で書き、整理してから機能の実装をすることにしました。書き出すことで頭の中が整理されて、視覚的にも分かりやすく、次に何をするのかも明確になったので、開発がスムーズに進ようになったと思います。
                </Typography>
              </Stack>
              <Stack>
                <Typography fontWeight={"bold"}>
                  2. フレームワークの適切な選定と実装方法
                </Typography>
                <Typography>
                  フロントエンドにReact、バックエンドにRuby on
                  RailsのAPIモードを採用しました。
                  <Link href={"https://railstutorial.jp/"} target="_block">
                    RailsTutorial
                  </Link>
                  で作った機能と似たところが多かったため応用して開発を進めようと考えていましたが、フロントエンドとバックエンドを別々の言語・フレームワークにしたこととRuby
                  on
                  RailsはAPIモードを使ったことにより、RailsTutorialとは同じようにはできませんでした。Ruby
                  on
                  Railsで実装方法やエラーの解決方法を調べてみてもAPIモードに対応した情報が少なく、初学者の私にはその情報の選別がとても大変に感じました。エラーを解決することは大変でしたが、エラーが出てもエラーメッセージを読み本質的に考えることで、調べた情報を生かし対応する力が付いたと思います。また、フレームワークの選定とプロジェクトの設計における考慮点の重要性を理解する良い機会となりました。
                </Typography>
              </Stack>
            </Stack>
          }
        />

        {/* AI Portal */}
        <ProductsElement
          name="AI Portal"
          imageSource="/ai1.png"
          tech={[
            "HTML",
            "CSS",
            "TypeScript",
            "React",
            "Next.js",
            "Node.js",
            "Express",
            "PostgreSQL",
            "OpenAI",
            "Vercel",
            "Render",
            "MSW",
            "MUI",
            "GitHub",
          ]}
          overview="AI対話アプリケーション / 複数人開発"
          usage={[
            "AIの作成",
            "AIの削除",
            "AIの公開/非公開設定",
            "X(旧Twitter)連携(OAuth2.0)",
            "アカウントの登録",
          ]}
          concept={
            <Stack>
              <Typography>
                家族と2人で開発しました。フロントエンドとスクラムマスターを担当。
              </Typography>
              <Typography>
                詳しい技術がわからなくても誰でも簡単にOpenAIに気軽に触れるきっかけとなるアプリケーションになることを目指しています。
              </Typography>
              <Typography>
                複数人の開発、1日スプリントのスクラム開発、短期間(5日間)の集中開発など、様々なことに挑戦しました。
                また、OpenAIを使って何かアプリケーションを作ってみたかったことなども開発のきっかけです。
              </Typography>
            </Stack>
          }
          problems={
            <Stack>
              <Typography fontWeight={"bold"}>複数人での開発</Typography>
              <Typography>
                2人で開発することで、認識に齟齬があったり実装の方針が違ったりなど複数人で開発することの難しさがありました。開発中の困ったことやうまくいかなかったことなどは毎日のスプリントレトロスペクティブやスプリントレビューで率直に話し合うことにし、すれ違いや摩擦を少なくするよう努めました。この開発では帆船という手法でのスプリントレトロスペクティブを実施しました。開発がうまく進んだ時は船を前進させたり追い風を追加したりし、障害が大きくうまく開発できなかったときは岩を大きくしたりして視覚的にわかりやすく且つ楽しくレトロスペクティブができるよう工夫しました。実質的な開発の内容だけにとどまらずお互いの気持ちなどにも焦点を当て、何が要因でうまくいったのかやうまくできなかったのかなどにも着目することも心がけ、お互いの考えを共有しました。また、コードレビューやペアプログラミングを活用しお互いの意見を出し合ったり評価をしてもらうことで、お互いにとって良いコードを書けるよう努めました。複数人で開発することは1人で開発することとは違う問題がありましたが、お互いが気持ちよく開発できるようコミュニケーションを心がけ、楽しく開発ができるよう努めました。
              </Typography>
            </Stack>
          }
        />

        {/* portfolio Site */}
        <ProductsElement
          name="omi.t's portfolio"
          imageSource="/portfolio1.png"
          url="https://omitea8.vercel.app/"
          frontendRepositoryUrl="https://github.com/omitea8/portfoliosite"
          tech={[
            "HTML",
            "CSS",
            "TypeScript",
            "React",
            "Next.js",
            "Vercel",
            "MUI",
            "react-icons",
            "GitHub",
          ]}
          overview="ポートフォリオサイト"
          concept={
            <Typography>
              自分について知ってもらうためにサイトを作成しました。また、Next.jsの勉強も兼ねています。
            </Typography>
          }
          problems={
            <Stack>
              <Typography fontWeight={"bold"}>レイアウト</Typography>
              <Typography>
                取得技術の見やすさ、勉強したこと、作成物の一覧など、情報をどうしたら見やすくなるのかというところが難しかったです。取得技術については文字の羅列ではなくロゴを入れ、また習熟具合を％で表すことで視覚的に分かりやすくなったと思います。
                また、文章や文字の情報が多いページでは、線を入れたり文字の大きさ・太さなどを変えたり区切りを大きめに入れたりして区切りを分かりやすくしました。
              </Typography>
            </Stack>
          }
        />

        {/* Notion */}
        <ProductsElement
          name="Notion"
          imageSource="/notion1.png"
          url="https://www.notion.so/programming-2c75a15d726944b7b1a386b35868c678?pvs=4"
          tech={["Notion"]}
          overview="日々の学習や開発の記録"
          concept={
            <Typography>
              学んだことや開発の記録のためにNotionを利用しました。学習では学んだことの記録・復習のため、開発では主に設計の過程や開発のToDoなどを記録しています。アウトプットや人に伝えることの練習も兼ね文章にすることを心がけています。また、MermaidやMarkdownなど実務を意識して記法に慣れるために積極的に使っています。
            </Typography>
          }
        />
      </Stack>
    </Stack>
  );
};

export default ProductsPage;
