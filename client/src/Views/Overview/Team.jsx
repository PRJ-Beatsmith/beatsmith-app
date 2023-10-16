/* eslint-disable react-refresh/only-export-components */
import { memo } from "react";
import { Paper, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  heading: {
    borderBottom: "1px solid #E5E8EC",
  },
  toolBox: {
    display: "flex",
    flexDirection: "row-reverse",
  },
  searchInput: {
    display: "flex",
    alignItems: "center",
    width: 212,
    height: 36,
    border: "1px solid #E5E8EC",
    borderRadius: 4,
    boxShadow: "none",
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 3,
    marginLeft: 8,
  },
  fullPage: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
}));

export default memo(function TeamOverviewPage() {
  const classes = useStyles();

  return (
    <Paper className={classes.fullPage} square>
      <Box>
        <Typography>Test Team</Typography>
      </Box>
    </Paper>
  );
});
