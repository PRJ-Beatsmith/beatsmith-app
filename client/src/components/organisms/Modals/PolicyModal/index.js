import React, { memo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  IconButton,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles({
  root: {},
});

export const PolicyModal = memo(
  ({ open = true, buttonText = "", onClose, children }) => {
    const classes = useStyles();
    const { t } = useTranslation();

    return (
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle id="alert-dialog-title">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box className={classes.title}>{buttonText}</Box>
            <IconButton aria-label="close" onClick={onClose} size="small">
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent>
          <Box mb="24px">{children}</Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            {t("shared.close")}
          </Button>
        </DialogActions>
      </Dialog>
    );
  },
);
