import { Box, Typography } from "@mui/material";
import { TextLogo } from "@/components/atoms/Logos/TextLogo";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "10px",
    padding: "55px 0",
  },
  imgBox: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: "50%",
    height: "100%",
  },
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
    <Box className={classes.container}>
      <Box className={classes.imgBox}>
        <TextLogo imgClass={classes.img} />
      </Box>
      {/* {import.meta.env.VITE_APP_VERSION ? (
        <Typography
          variant="caption"
          display="block"
          gutterBottom
          className={classes.version}>
          {"Ver. " + import.meta.env.VITE_APP_VERSION}
        </Typography>
      ) : (
        ""
      )} */}
    </Box>
  );
}
