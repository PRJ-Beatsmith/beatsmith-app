import { Box, Typography } from "@mui/material";
import { TextLogo } from "@/components/atoms/Logos/TextLogo";
import { makeStyles } from "@material-ui/styles";
import process from "process";

const useStyles = makeStyles(() => ({
  version: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "end",
    color: "#A7B9CA",
  },
}));

export default function AuthTitle() {
  const classes = useStyles();

  return (
    <Box>
      <TextLogo />
      {process.env.REACT_APP_VERSION ? (
        <Typography
          variant="caption"
          display="block"
          gutterBottom
          className={classes.version}>
          {"v" + process.env.REACT_APP_VERSION}
        </Typography>
      ) : (
        ""
      )}
      <Typography>V2</Typography>
    </Box>
  );
}
