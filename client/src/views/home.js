import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import Navigation from "components/organisms/Navigation";

const useStyles = makeStyles({
  root: {
    height: "100% !important",
  },
});

export default function Home() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Navigation />
    </Box>
  );
}
