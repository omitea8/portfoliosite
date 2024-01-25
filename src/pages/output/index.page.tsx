import { Stack, Typography } from "@mui/material";
import { OutputElement } from "./OutputElement";
import { Logo } from "../../components/Logo";
import Link from "next/link";

const OutPutPage: React.FC = () => {
  return (
    <Stack spacing={5}>
      <Logo size="h3" name="Output" />
      <Stack spacing={17}>
        {/* caita */}
        <OutputElement
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
              画像の閲覧画面を簡単にカスタマイズでき、且つ画像投稿に特化した画像投稿サービスが欲しかったため作成に至りました。
              このアプリケーションでは、画像投稿者らしさを出せることを一番に考え、簡単な操作性と安全なセキュリティを実現することを目指しています。
            </Typography>
          }
          problems={
            <Stack spacing={1}>
              <Stack>
                <Typography>1, 複雑なロジックの構築</Typography>
                <Typography>
                  機能を実装するために、プログラムの流れを計画する作業が、想像していたよりも大変でした。フロントエンドやバックエンドやDB、その他外部のシステムとの連携などをどういう順番で呼び出すのかやどういった形で返ってくるのか、受け取った後どうするのかなど考えることがたくさんありました。
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
                <Typography>2, フレームワークの適切な選定と利用</Typography>
                <Typography>
                  バックエンドにRails、フロントエンドにReactを採用しました。
                  <Link href={"https://railstutorial.jp/"} target="_block">
                    RailsTutorial
                  </Link>
                  で作った機能と似たところが多かったため応用して開発を進めようと考えていましたが、フロントエンドとバックエンドを別々の言語・フレームワークにしたこととRailsはAPIモードを使ったことにより、RailsTutorialとは同じようにはいきませんでした。
                  エラーを解決することは大変でしたが、エラーが出ても冷静にエラーメッセージを読み対応する力が付いたと思います。また、フレームワークの選定とプロジェクトの設計における考慮点の重要性を理解する良い機会となりました。
                </Typography>
              </Stack>
            </Stack>
          }
        />

        {/* AI Portal */}
        <OutputElement
          name="AI Portal"
          imageSource="/ai1.png"
          url="https://ai-portal.tech/"
          tech={[
            "HTML",
            "CSS",
            "TypeScript",
            "React",
            "Next.js",
            "Node.js",
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
              <Typography>1, 複数人での開発</Typography>
              <Typography>
                2人で開発することで、認識に齟齬があったり実装の方針が違ったりなど複数人で開発することの難しさがありました。開発中の困ったことやうまくいかなかったことなどは毎日のスプリントレトロスペクティブやスプリントレビューで率直に話し合うことにし、すれ違いや摩擦Cを少なくするよう努めました。また、コードレビューやペアプログラミングを活用しお互いの意見を出し合ったり評価をしてもらうことで、お互いにとって良いコードを書けるよう努めました。複数人で開発することは一人で開発することとは違う問題がありましたが、お互いが気持ちよく開発できることを心がけ、楽しく開発ができました。
              </Typography>
            </Stack>
          }
        />

        {/* portfolio Site */}
        <OutputElement
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
              <Typography>1, レイアウト</Typography>
              <Typography>
                取得技術の見やすさ、勉強したこと、作成物の一覧など、情報をどうしたら見やすくなるのかというところが難しかったです。取得技術については文字の羅列ではなくロゴを入れ、また習熟具合を％で表すことで視覚的に分かりやすくなったと思います。
                また、文章や文字の情報が多いページでは、線を入れたり文字の大きさ・太さなどを変えたり区切りを大きめに入れたりして区切りを分かりやすくしました。
              </Typography>
            </Stack>
          }
        />

        {/* Notion */}
        <OutputElement
          name="Notion"
          imageSource="/notion1.png"
          url="https://www.notion.so/programming-2c75a15d726944b7b1a386b35868c678?pvs=4"
          tech={["Notion"]}
          overview="日々の学習や開発の記録"
          concept={
            <Typography>
              学んだことや開発の記録のためにNotionを利用しました。学習では学んだことの記録・復習のため、開発では主に設計の過程や開発のToDoなどの記録を記録しています。アウトプットや人に伝えることの練習も兼ね文章にすることを心がけています。また、MermaidやMarkdownなど実務を意識して記法に慣れるために積極的に使っています。
            </Typography>
          }
        />
      </Stack>
    </Stack>
  );
};

export default OutPutPage;
