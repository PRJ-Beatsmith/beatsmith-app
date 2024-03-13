import React, { memo } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  IconButton,
  Typography,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  // useMediaQuery,
} from "@mui/material";
import { appScrollBar } from "utils/cssUtils";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "react-i18next";
import FormButton from "components/atoms/Buttons/formButton";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    margin: 0,
    padding: theme.spacing(4),
    width: 428,
    height: 414,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  scrollBar: {
    ...appScrollBar,
  },
  title: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: theme.spacing(3),
    position: "relative",
    padding: 0,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fafafa",
  },
  dialogContent: {
    padding: 0,
    ...appScrollBar,
  },
  dialogContentText: {
    padding: theme.spacing(2, 0, 0, 0),
  },
  closeButton: {
    color: "#fafafa",
    paddingRight: 0,
    "&:hover": {
      background: "none",
    },
  },
}));

const StyledDialogActions = withStyles((theme) => ({
  root: {
    padding: 0,
    justifyContent: "center",
    alignItems: "flex-start",
    gap: theme.spacing(1),
  },
}))(DialogActions);

export const PolicyModal = memo(
  ({
    open = true,
    buttonText = "",
    onClose,
    modalTitle = "",
    modalContent = "",
    ...other
  }) => {
    // const isMobileView = useMediaQuery((theme) => theme.breakpoints.down("sm"));
    const classes = useStyles();
    const { t } = useTranslation();

    return (
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="customized-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth={"sm"}
        classes={{ paper: classes.scrollBar }}
      >
        <Box className={classes.root}>
          <DialogTitle {...other} className={classes.title}>
            <Typography className={classes.titleText}>{modalTitle}</Typography>
            {onClose ? (
              <IconButton
                aria-label="close"
                className={classes.closeButton}
                onClick={onClose}
              >
                <CloseIcon />
              </IconButton>
            ) : null}
          </DialogTitle>
          <DialogContent className={classes.dialogContent}>
            <Box mb="24px" className={classes.dialogContentText}>
              {modalContent}
            </Box>
          </DialogContent>
          <StyledDialogActions>
            <FormButton
              variant="primary"
              type="button"
              onClick={onClose}
              label={t("shared.close")}
            />
          </StyledDialogActions>
        </Box>
      </Dialog>
    );
  },
);
