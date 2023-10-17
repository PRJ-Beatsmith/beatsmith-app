import { memo } from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { RoutSwitchButton } from "@/components/atoms/Buttons/RoutSwitchButton";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material/styles";
import AuthTitle from "@/components/molecules/AuthTitle";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {},
  content: {},
}));

export default memo(function LoginPage() {
  const classes = useStyles();
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Box
      className={classes.root}
      backgroundColor={theme.palette.background.main}>
      <Box className={classes.header}>
        <AuthTitle />
      </Box>
      <Box className={classes.content}></Box>
    </Box>
  );
});
