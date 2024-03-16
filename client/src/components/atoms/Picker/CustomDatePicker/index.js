import React from "react";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@mui/material";
import moment from "moment-timezone";

const useStyles = makeStyles({
  root: {
    flexShrink: 0,
    borderRadius: "4px",
    background: "#0B0D0E",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    fontFamily: "Inter",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "150%",
    color: "#FFF",
  },
});

const CustomDatePicker = ({
  value,
  onChange,
  placeholder,
  fullWidth = false,
  autoComplete = "date",
  id,
  name,
  ...otherProps
}) => {
  const classes = useStyles();

  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  moment.tz.setDefault(userTimeZone);

  return (
    <LocalizationProvider
      dateAdapter={AdapterMoment}
      adapterLocale={userTimeZone}
    >
      <DatePicker
        component={TextField}
        type="date"
        style={{ width: fullWidth ? "100%" : "200px", height: "50px" }}
        className={classes.root}
        placeholder={placeholder}
        fullWidth={fullWidth}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        id={id}
        name={name}
        {...otherProps}
        sx={{
          "&:hover .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              border: "none",
            },
            "&.Mui-focused fieldset": {
              border: "2px solid #EC4E49",
            },
          },
          "& .MuiInputBase-input": {
            color: "white",
          },
          "& .MuiSvgIcon-root": {
            color: "white",
          },
        }}
        // timezone={}
        {...otherProps}
      />
    </LocalizationProvider>
  );
};

export default CustomDatePicker;
