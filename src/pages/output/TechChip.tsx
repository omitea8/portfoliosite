import { Chip } from "@mui/material";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
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
  SiSqlite,
  SiVisualstudiocode,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeaftereffects,
  SiOpenai,
  SiNotion,
} from "react-icons/si";
import { FaPeopleGroup, FaServer } from "react-icons/fa6";

export type Tech =
  | "HTML"
  | "CSS"
  | "JavaScript"
  | "TypeScript"
  | "React"
  | "Ruby"
  | "Node.js"
  | "Next.js"
  | "Ruby on Rails"
  | "MUI"
  | "react-icons"
  | "AWS(S3)"
  | "Vercel"
  | "Heroku"
  | "Render"
  | "MSW"
  | "Git"
  | "GitHub"
  | "PostgreSQL"
  | "SQLite"
  | "VSCode"
  | "Photoshop"
  | "Illustrator"
  | "AfterEffects"
  | "OpenAI"
  | "Notion"
  | "チーム開発";

interface Props {
  tech: Tech;
}

export const TechChip: React.FC<Props> = ({ tech }) => {
  const techIcon = (tech: Tech) => {
    if (tech === "HTML") return <SiHtml5 />;
    else if (tech === "CSS") return <SiCss3 />;
    else if (tech === "JavaScript") return <SiJavascript />;
    else if (tech === "TypeScript") return <SiTypescript />;
    else if (tech === "React") return <SiReact />;
    else if (tech === "Ruby") return <SiRuby />;
    else if (tech === "Node.js") return <SiNodedotjs />;
    else if (tech === "Next.js") return <SiNextdotjs />;
    else if (tech === "Ruby on Rails") return <SiRubyonrails />;
    else if (tech === "MUI") return <SiMui />;
    else if (tech === "react-icons") return <SiReact />;
    else if (tech === "AWS(S3)") return <SiAmazonaws />;
    else if (tech === "Vercel") return <SiVercel />;
    else if (tech === "Heroku") return <SiHeroku />;
    else if (tech === "Render") return <SiRender />;
    else if (tech === "MSW") return <FaServer />;
    else if (tech === "Git") return <SiGit />;
    else if (tech === "GitHub") return <SiGithub />;
    else if (tech === "PostgreSQL") return <SiPostgresql />;
    else if (tech === "SQLite") return <SiSqlite />;
    else if (tech === "VSCode") return <SiVisualstudiocode />;
    else if (tech === "Photoshop") return <SiAdobephotoshop />;
    else if (tech === "Illustrator") return <SiAdobeillustrator />;
    else if (tech === "AfterEffects") return <SiAdobeaftereffects />;
    else if (tech === "OpenAI") return <SiOpenai />;
    else if (tech === "Notion") return <SiNotion />;
    else if (tech === "チーム開発") return <FaPeopleGroup />;
    else return <></>;
  };

  return (
    <Chip
      variant="outlined"
      label={tech}
      sx={{
        "& .MuiChip-icon": {
          marginLeft: "12px",
        },
      }}
      icon={techIcon(tech)}
    />
  );
};
