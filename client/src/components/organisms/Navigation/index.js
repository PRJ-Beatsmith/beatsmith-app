import React from "react";
import { Box, Button, Typography, List } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    width: "10%",
    backgroundColor: "#0B0E18",
    padding: "20px",
    margin: "50px",
  },
});

function Navigation() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <List>
        <Box>
          <DashboardIcon />
        </Box>
        <Box>
          <TaskAltIcon />
        </Box>
        <Box>
          <SettingsIcon />
        </Box>
        <Box>
          <AccountCircleIcon />
        </Box>
      </List>
    </Box>
  );
}

export default Navigation;
