import { Typography, Stack } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Skill, SkillLevelElement } from "./SkillLevelElement";

interface Props {
  category: string;
  skills: Skill[];
}

export const SkillLevelSet: React.FC<Props> = ({ category, skills }) => {
  return (
    <Stack spacing={1}>
      <Typography variant="h6" fontWeight={"bold"}>
        {category}
      </Typography>
      <Grid container rowSpacing={2} columnSpacing={5}>
        {skills.map((skill) => {
          return (
            <Grid xs={12} md={6} key={skill.name}>
              <SkillLevelElement
                name={skill.name}
                level={skill.level}
                icon={skill.icon}
              />
            </Grid>
          );
        })}
      </Grid>
    </Stack>
  );
};
