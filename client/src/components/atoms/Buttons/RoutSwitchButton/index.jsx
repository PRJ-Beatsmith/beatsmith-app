import { Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E94057 !important",
    color: "#F6F6F6 !important",

    "&:hover": {
      backgroundColor: "#C03B4E !important",
    },
  },
}));

export const RoutSwitchButton = ({
  textKey,
  staticText,
  icon,
  to,
  typographyClass,
}) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const history = useHistory();

  const text = textKey ? t(textKey) : staticText;

  const handleClick = () => {
    if (to) {
      history.push(to);
    }
  };

  return (
    <Button type="button" className={classes.button} onClick={handleClick}>
      {icon && <span style={{ marginRight: "8px" }}>{icon}</span>}
      <Typography className={typographyClass}>{text}</Typography>
    </Button>
  );
};
