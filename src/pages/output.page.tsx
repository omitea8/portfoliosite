import { Stack, Typography } from "@mui/material";
import { OutputElement } from "./components/OutputElement";
import { Logo } from "./components/Logo";

const OutPutPage: React.FC = () => {
  return (
    <Stack spacing={3}>
      <Logo size="h3" name="Output" />
      <Stack spacing={5}>
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
          overview="画像の投稿Webアプリケーション"
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
                <Typography>1, 複雑なロジックの構築：</Typography>
                <Typography>
                  機能を実装するために、プログラム流れを計画する作業は思っていたよりも大変でした。フロントエンドやバックエンドやDB、その他外部のシステムとの連携などがどういう順番で呼び出したいのかやどういった形で返ってくるのかなどとても複雑でした。
                  全体の流れをシーケンス図にし、整理してから機能の実装をすることにしました。また、APIの呼び出しの調査は時間がかかり、専門的な知識の重要性を実感しました。
                </Typography>
              </Stack>
              <Stack>
                <Typography>2, フレームワークの適切な選定と利用</Typography>
                <Typography>
                  バックエンドにRails、フロントエンドにReactを採用しました。RailsTutorialから応用しようと考えていましたが、フロントエンドとバックエンドを別々の言語・フレームワークにしたこと、RailsはAPIモードを使ったことにより、Tutorialとは同じようにはいきませんでした。
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
          overview="OpenAIを使った一往復の対話アプリケーション"
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
                詳しい技術がわからなくても誰でも簡単にOpenAIに気軽に触れるアプリケーションになることを目指しています。
              </Typography>
              <Typography>
                OpenAIを使って何かアプリケーションを作ってみたかったこと、複数人で開発をしてみたかったこと、1日スプリントでスクラム開発をしてみたかったことなども開発のきっかけです。
              </Typography>
            </Stack>
          }
          problems={
            <Stack>
              <Typography>1, 複数人での開発</Typography>
              <Typography>
                開発は1日スプリントのスクラムでGW中(5日間)で開発しました。2人で開発することで、齟齬があったり方針が違ったりなど複数人で開発することの難しさがありました。開発中の困ったことやうまくいかなかったことなどは毎日のスプリントレトロスペクティブやスプリントレビューで率直に話し合うことにし、すれ違いや摩擦を少なくするよう努めました。また、コードレビューやペアプログラミングを活用しお互いの意見を出し合ったり評価をしてもらうことで、お互いにとって良いコードを書けるよう努めました。複数人で開発することは一人で開発することとは違う問題がありましたが、ひとりひとりが気持ちよく開発できることを心がけ、開発中は楽しく開発ができました。
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
        />

        {/* Notion */}
        <OutputElement
          name="Notion"
          url="https://www.notion.so/programming-2c75a15d726944b7b1a386b35868c678?pvs=4"
          tech={["Notion"]}
          overview="日々の勉強や開発の記録"
        />
      </Stack>
    </Stack>
  );
};

export default OutPutPage;
