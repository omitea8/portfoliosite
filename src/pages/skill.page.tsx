import { Typography, Stack } from "@mui/material";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
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
} from "react-icons/si";
import { FaPeopleGroup } from "react-icons/fa6";
import { SkillLevelSet } from "./components/SkillLevelSet";

const SkillPage: React.FC = () => {
  const languageSkill = [
    { name: "CSS", level: 40, icon: <SiCss3 /> },
    { name: "HTML5", level: 60, icon: <SiHtml5 /> },
    { name: "JavaScript", level: 70, icon: <SiJavascript /> },
    { name: "TypeScript", level: 80, icon: <SiTypescript /> },
    { name: "Ruby", level: 30, icon: <SiRuby /> },
  ];
  const frameworksAndLibrarySkill = [
    { name: "React", level: 80, icon: <SiReact /> },
    { name: "Next.js", level: 50, icon: <SiNextdotjs /> },
    { name: "Ruby on Rails", level: 30, icon: <SiRubyonrails /> },
    { name: "MUI", level: 80, icon: <SiMui /> },
  ];
  const infrastructureSkill = [
    { name: "AWS(S3)", level: 30, icon: <SiAmazonaws /> },
    { name: "Vercel", level: 30, icon: <SiVercel /> },
    { name: "Heroku", level: 30, icon: <SiHeroku /> },
    { name: "Render", level: 30, icon: <SiRender /> },
  ];
  const otherSkill = [
    { name: "Git", level: 80, icon: <SiGit /> },
    { name: "GitHub", level: 80, icon: <SiGithub /> },
    { name: "PostgreSQL", level: 50, icon: <SiPostgresql /> },
    { name: "Visual Studio Code", level: 70, icon: <SiVisualstudiocode /> },
    { name: "Photoshop", level: 80, icon: <SiAdobephotoshop /> },
    { name: "Illustrator", level: 60, icon: <SiAdobeillustrator /> },
    { name: "After Effects", level: 50, icon: <SiAdobeaftereffects /> },
    { name: "スクラム開発の基礎知識", level: 70, icon: <FaPeopleGroup /> },
  ];

  return (
    <Stack spacing={3}>
      <Typography variant="h3">Skill</Typography>
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
