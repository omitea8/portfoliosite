import { IconButton, Stack, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import { TimeLineElement } from "./components/TimeLineElement";
import { Timeline, timelineItemClasses } from "@mui/lab";

export default function Home() {
  return (
    <Stack spacing={3}>
      <Typography variant="h3">About</Typography>
      <Stack spacing={1}>
        <Stack direction="row" alignItems={"center"} spacing={1}>
          <Typography variant="h4">omi.t</Typography>
          <IconButton onClick={() => window.open("https://github.com/omitea8")}>
            <GitHubIcon />
          </IconButton>
          <IconButton
            onClick={() => window.open("https://twitter.com/omitea8")}
          >
            <TwitterIcon />
          </IconButton>
        </Stack>
        <Typography>愛媛県生まれ奈良県在住。</Typography>
        <Typography>
          2022年4月からプログラミングの勉強を開始した初心者。家族の現役エンジニアに教えてもらいながら日々奮闘中です。
        </Typography>
        <Typography>
          コードどころか機械のことはわからないという感じの人生でしたので、まずは開発の全体の流れを把握できるよう勉強してきました。今後はフロントエンドに集中し、よりよいUI/UXを作れるようになるため専門的な知識を身につけていきたいと思っています。
        </Typography>
      </Stack>
      <Stack spacing={1}>
        <Typography variant="h4">経歴</Typography>
        <Timeline
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          }}
        >
          <TimeLineElement
            day="2008"
            title="私立済美高等学校 美術科(愛媛)"
            line={true}
          />
          <TimeLineElement
            day="2010"
            title="日本電子専門学校 アニメーション科"
            line={true}
          />
          <TimeLineElement day="2013" title="飲食店アルバイト" line={true} />
          <TimeLineElement
            day="2022"
            title="派遣社員として一般事務"
            line={true}
          />
          <TimeLineElement
            day="現在"
            title="エンジニアになるために勉強中"
            line={false}
          />
        </Timeline>
      </Stack>
    </Stack>
  );
}
