/* eslint-disable react-refresh/only-export-components */
import { memo } from "react";
import { Paper, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { ThemeProvider } from "@mui/material";
import { useMode } from "@/theme/theming";

const useStyles = makeStyles(() => ({
  root: {},
}));

export default memo(function FeaturesOverviewPage() {
  const classes = useStyles();
  const [theme] = useMode();

  return (
    <ThemeProvider theme={theme}>
      <Paper className={classes.fullPage} square>
        <Box>
          <Typography>Test Benefits</Typography>
        </Box>
      </Paper>
    </ThemeProvider>
  );
});
