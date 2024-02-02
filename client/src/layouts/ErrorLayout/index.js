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

function ErrorLayout() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography variant="h1">ErrorLayout</Typography>
      <Suspense fallback={<CircularProgress />}>
        <Routes>
          <Route path="/404" element={<div>404</div>} />
          <Route path="/401" element={<div>401</div>} />
          <Route path="/403" element={<div>403</div>} />
        </Routes>
      </Suspense>
    </Box>
  );
}

export default memo(ErrorLayout);
