import { Typography, Stack } from "@mui/material";

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
    </Stack>
  );
};

export default SkillPage;
