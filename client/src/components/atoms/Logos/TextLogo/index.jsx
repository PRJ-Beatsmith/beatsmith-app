import { Box } from "@mui/material";

export const TextLogo = ({ imgClass }) => {
  return (
    <Box
      component="img"
      src="/img/Beatsmith-logo.png"
      alt=""
      className={imgClass}
    />
  );
};
