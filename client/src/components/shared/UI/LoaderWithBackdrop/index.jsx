import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

const LoaderWithBackdrop = (props) => {
  const classes = useStyles();

  let loaderWithBackdropUI = null;
  if (!props.open) {
    return loaderWithBackdropUI;
  }

  loaderWithBackdropUI = (
    <Backdrop className={classes.backdrop} open={props.open}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );

  return loaderWithBackdropUI;
};

export default LoaderWithBackdrop;
