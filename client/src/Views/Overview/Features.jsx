/* eslint-disable react-refresh/only-export-components */
import { memo } from "react";
import { Paper, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  root: {},
}));

export default memo(function FeaturesOverviewPage() {
  const classes = useStyles();

  return (
    <Paper className={classes.fullPage} square>
      <Box>
        <Typography>Test Benefits</Typography>
      </Box>
    </Paper>
  );
});
