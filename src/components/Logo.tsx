import { Typography } from "@mui/material";

interface Props {
  name: string;
  size:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body2";
}

export const Logo: React.FC<Props> = ({ name, size }) => {
  return (
    <Typography variant={size} fontFamily="Cutive Mono">
      {name}
    </Typography>
  );
};
