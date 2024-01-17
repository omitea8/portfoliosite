import { Typography, Stack } from "@mui/material";
import {
  SiCss3,
  SiHtml5,
  SiTypescript,
  SiRuby,
  SiReact,
  SiNextdotjs,
  SiRubyonrails,
  SiMui,
  SiAmazonaws,
  SiVercel,
  SiHeroku,
  SiRender,
  SiGit,
  SiGithub,
  SiPostgresql,
  SiVisualstudiocode,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeaftereffects,
  SiFigma,
  SiMiro,
} from "react-icons/si";
import { FaPeopleGroup } from "react-icons/fa6";
import { SkillLevelSet } from "./SkillLevelSet";
import { Logo } from "../../components/Logo";

const SkillPage: React.FC = () => {
  const languageSkill = [
    { name: "TypeScript(JavaScript)", level: 80, icon: <SiTypescript /> },
    { name: "Ruby", level: 50, icon: <SiRuby /> },
    { name: "CSS", level: 50, icon: <SiCss3 /> },
    { name: "HTML5", level: 70, icon: <SiHtml5 /> },
  ];
  const frameworksAndLibrarySkill = [
    { name: "React", level: 80, icon: <SiReact /> },
    { name: "Next.js", level: 50, icon: <SiNextdotjs /> },
    { name: "Ruby on Rails", level: 50, icon: <SiRubyonrails /> },
    { name: "MUI", level: 80, icon: <SiMui /> },
  ];
  const infrastructureSkill = [
    { name: "AWS(S3)", level: 60, icon: <SiAmazonaws /> },
    { name: "Vercel", level: 60, icon: <SiVercel /> },
    { name: "Heroku", level: 30, icon: <SiHeroku /> },
    { name: "Render", level: 60, icon: <SiRender /> },
  ];
  const otherSkill = [
    { name: "Git", level: 100, icon: <SiGit /> },
    { name: "GitHub", level: 100, icon: <SiGithub /> },
    {
      name: "アジャイル・スクラム開発の基礎知識",
      level: 80,
      icon: <FaPeopleGroup />,
    },
    { name: "PostgreSQL", level: 70, icon: <SiPostgresql /> },
    { name: "Visual Studio Code", level: 70, icon: <SiVisualstudiocode /> },
    { name: "Photoshop", level: 100, icon: <SiAdobephotoshop /> },
    { name: "Illustrator", level: 60, icon: <SiAdobeillustrator /> },
    { name: "After Effects", level: 50, icon: <SiAdobeaftereffects /> },
    { name: "Figma", level: 40, icon: <SiFigma /> },
    { name: "Miro", level: 90, icon: <SiMiro /> },
  ];

  return (
    <Stack spacing={5}>
      <Logo size="h3" name="Skill" />
      <Typography variant="subtitle2">
        問題やわからないことは検索などをして解決し、一人で作業を任されても問題のないレベルを100%としています。
      </Typography>
      <Stack spacing={5}>
        <SkillLevelSet category={"プログラミング言語"} skills={languageSkill} />
        <SkillLevelSet
          category={"フレームワーク / ライブラリー"}
          skills={frameworksAndLibrarySkill}
        />
        <SkillLevelSet category={"インフラ"} skills={infrastructureSkill} />
        <SkillLevelSet category={"その他"} skills={otherSkill} />
      </Stack>
    </Stack>
  );
};

export default SkillPage;
