import React, { memo } from "react";
import { Tooltip } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

const useTooltipStyles = makeStyles((theme) => ({
  arrow: {
    color: (props) => (props.white ? "#fff" : theme.palette.text.secondary),
  },
  tooltip: {
    bottom: (props) =>
      props.placement === "bottom-start" || "bottom" || "bottom-end"
        ? theme.spacing(1)
        : theme.spacing(-1),
    top: (props) =>
      props.placement === "top-start" || "top" || "top-end"
        ? theme.spacing(1)
        : theme.spacing(-1),
    left: (props) =>
      props.placement === "left" ? theme.spacing(1) : theme.spacing(-1),
    right: (props) =>
      props.placement === "right" ? theme.spacing(1) : theme.spacing(-1),
    backgroundColor: (props) =>
      props.white ? "#fff" : theme.palette.text.secondary,
    color: (props) => (props.white ? theme.palette.text.secondary : ""),
    boxShadow: (props) =>
      props.white ? "0px 4px 16px 0px rgba(87, 104, 131, 0.20)" : "",
  },
}));

const MessageActionsTooltip = memo((props) => (
  <Tooltip
    arrow
    classes={useTooltipStyles({
      placement: props.placement,
      white: props.white,
    })}
    {...props}
  />
));

export default MessageActionsTooltip;
