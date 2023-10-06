// components/CircularLoader.js
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  circularLoader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1000,
  },
});

const CircularLoader = ({ customStyleContainer, customStyleItem, size }) => {
  const classes = useStyles();
  return (
    <div
      className={
        customStyleContainer ? customStyleContainer : classes.circularLoader
      }>
      <CircularProgress
        className={customStyleItem ? customStyleItem : ""}
        size={size ? size : 40}
      />
    </div>
  );
};

export default CircularLoader;
