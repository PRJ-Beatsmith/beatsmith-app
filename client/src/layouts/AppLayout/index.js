import React, { Suspense, memo } from "react";
import { Route, Routes } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, CircularProgress } from "@mui/material";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
});

function AppLayout() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography variant="h1">AppLayout</Typography>
      <Suspense fallback={<CircularProgress style={{ margin: "auto" }} />}>
        <Routes>
          <Route path="/login" element={<div>AuthLayout</div>} />
          <Route path="/register" element={<div>AuthLayout</div>} />
        </Routes>
      </Suspense>
    </Box>
  );
}

export default memo(AppLayout);
