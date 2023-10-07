/* eslint-disable react-refresh/only-export-components */
import { memo } from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { ThemeProvider } from "@mui/material";
import { useMode } from "@/core/theme";

const useStyles = makeStyles(() => ({
  root: {
    minHeight: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
}));

export default memo(function AboutOverviewPage() {
  const classes = useStyles();
  const [theme] = useMode();

  return (
    <ThemeProvider theme={theme}>
      <Box className={classes.root}>
        <Typography>About</Typography>
      </Box>
    </ThemeProvider>
  );
});
