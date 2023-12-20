import { Box, Stack, Typography } from "@mui/material";
import { ReactNode, CSSProperties } from "react";

export interface Skill {
  name: string;
  level: number;
  icon: ReactNode;
}
type Props = Skill;

// グラデーションの終点色を計算する関数
const calculateGradientEndpoint = (level: number): string => {
  const startColor = [157, 187, 212]; // #9DBBD4
  const endColor = [70, 130, 180]; // #4682B4

  const mixedColor = startColor.map((start, index) => {
    return Math.round(start + (endColor[index] - start) * (level / 100));
  });

  return `rgb(${mixedColor.join(",")})`;
};

export const SkillLevelElement: React.FC<Props> = ({ name, level, icon }) => {
  const thickness = 10;
  const gradientEndpoint = calculateGradientEndpoint(level);

  const progressBarStyle: CSSProperties = {
    width: `${level}%`,
    height: `${thickness}px`,
    borderRadius: `${thickness}px`,
    background: `linear-gradient(to right, #C9D8E5, ${gradientEndpoint})`,
  };

  return (
    <>
      <Stack direction={"row"} alignItems={"center"} spacing={2}>
        <Typography variant="h4">{icon}</Typography>
        <Stack flex={1}>
          <Typography variant="body1" fontWeight={"bold"}>
            {name}
          </Typography>
          <Stack direction="row" alignItems={"center"} spacing={2}>
            <Box
              sx={{
                width: "100%",
                backgroundColor: "#ECECEC",
                borderRadius: `${thickness}px`,
              }}
            >
              <div style={progressBarStyle}></div>
            </Box>
            <Typography sx={{ color: "#888888" }}>{level}%</Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};
