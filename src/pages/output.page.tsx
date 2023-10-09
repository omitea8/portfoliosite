import { Stack, Typography } from "@mui/material";
import { OutputElement } from "./components/OutputElement";

const OutPutPage: React.FC = () => {
  return (
    <Stack spacing={6}>
      <Typography variant="h3">Output</Typography>

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
        overview={
          <Typography>
            画像の投稿・共有のWebアプリケーション。操作も見た目もシンプルに、自分の好みに合わせることができる画像投稿サービスを目指しています。
          </Typography>
        }
        usage={
          <>
            <Typography>
              Twitter(現X)連携(OAuth2.0)、アカウントの登録、画像とキャプションの投稿、投稿の編集、投稿削除、ログイン、ログアウト。
            </Typography>
            <Typography>
              今後は画像閲覧ページの色や背景をカスタマイズできる機能を作成していく予定です。
            </Typography>
          </>
        }
        concept={
          <>
            <Typography>
              既存の画像投稿サービスに自分の好みにぴったりとくるものがなかったため作成に至りました。
              既存の画像投稿サービスは、見た目を好みに変えられないか、好みに変えるには複雑すぎるものが多く、簡単に自分の好みに合わせられるものがありません。
              このアプリケーションでは、閲覧ページの色や背景、サムネイルサイズなどを簡単に変えられ画像投稿者らしい閲覧ページを作ることができるようになる予定です。
            </Typography>
            <Typography>
              また、既存の画像投稿サービスはSNSとしての側面が強いものが多く、どうしても他者の反応が介入してしまいます。
              自分の作品に集中してもらうためにあくまで画像管理の場としてのみ機能するよう心がけ、また他者への宣伝もしやすいサービスを目指しています。
            </Typography>
          </>
        }
        problems={
          <Typography>
            ロジックのフローを考えるところが難しかったです。シーケンス図を書き、フロントエンドやバックエンド、データベースなどとどうつながるかを整理しながらひとつひとつ機能を作っていきました。悪意のある攻撃から守るための方法を勉強したり、外部のAPIについて調べたりと機能を作るだけでなくさまざまな調査が必要になることがわかりました。また、この調査がとても大変で、今でも非常にむずかしいと感じています。
          </Typography>
        }
      />

      {/* AI Portal */}
      <OutputElement
        name="AI Portal"
        imageSource="/ai1.png"
        url="https://ai-portal.tech/"
        tech={[
          "HTML/CSS",
          "TypeScript",
          " React/Next.js",
          "Node.js(非担当)",
          "PostgreSQL(非担当)",
          "OpenAI",
          "Vercel",
          "Render",
          "MSW",
          " MUI",
          "GitHub",
        ]}
        overview={
          <Typography>
            OpenAIを使って誰でも簡単にAIと会話ができるサービス。簡単な指定・設定を書くだけでAIと1往復の簡単な会話をすることができます。また、作った設定は公開することができ幅広く作ったAIで遊ぶことができます。
          </Typography>
        }
        usage={
          <Typography>
            Twitter(現X)連携(oauth2.0)、アカウントの登録、AIの作成、AIの公開、AIの削除
          </Typography>
        }
        concept={
          <>
            {" "}
            <Typography>
              家族と2人で作成したWebアプリケーション。フロントエンドとスクラムマスターを担当。
            </Typography>
            <Typography>
              詳しい技術がわからなくても誰でも簡単にOpenAIに気軽に触れることをコンセプトに開発に至りました。OpenAIに触って独自のAIを作りたい人は簡単なプロンプトを入力しただけで自分だけのAIを作ることができ、ただ触って楽しみたい人はそこでできたAIを使って1往復の会話をすることができます。
            </Typography>
            <Typography>
              OpenAIを使って何かアプリケーションを作ってみたかったこと、複数人で開発をしてみたかったこと、1日スプリントでスクラム開発をしてみたかったことなども開発のきっかけです。
            </Typography>
          </>
        }
        problems={
          <>
            <Typography>
              開発は1日スプリントのスクラムでGW中(5日間)で開発しました。2人で開発することで、齟齬があったり方針が違ったりなど複数人で開発することの難しさがありました。開発中の困ったことやうまくいかなかったことなどは毎日のスプリントレトロスペクティブやスプリントレビューで率直に話し合うことにし、すれ違いや摩擦を少なくするよう努めました。また、コードレビューやペアプログラミングを活用しお互いの意見を出し合ったり評価をしてもらうことで、お互いにとって良いコードを書けるよう努めました。複数人で開発することは一人で開発することとは違う問題がありましたが、ひとりひとりが気持ちよく開発できることを心がけ、開発中は楽しく開発ができました。
            </Typography>
          </>
        }
      />

      {/* portfolio Site */}
      <OutputElement
        name="portfolio Site"
        imageSource="/portfolio1.png"
        url="https://portfoliosite-cyan.vercel.app/"
        frontendRepositoryUrl="https://github.com/omitea8/portfoliosite"
        tech={[
          "HTML/CSS",
          "TypeScript",
          "React/Next.js",
          "Vercel",
          "MUI",
          "GitHub",
        ]}
        overview={
          <Typography>
            このWebページです。ポートフォリオ用に作成しました。
          </Typography>
        }
      />

      {/* Notion */}
      <OutputElement
        name="Notion"
        url="https://www.notion.so/programming-2c75a15d726944b7b1a386b35868c678?pvs=4"
        overview={
          <Typography>
            自分の記録のための日々の勉強や開発の記録のページです。学習した項目はSkillにて記載しています。
          </Typography>
        }
      />
    </Stack>
  );
};

export default OutPutPage;
