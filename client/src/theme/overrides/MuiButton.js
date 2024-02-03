import { grey } from "@mui/material/colors";

const MuiButton = {
  contained: {
    boxShadow: "0 1px 1px 0 rgba(0,0,0,0.14)",
    backgroundColor: grey[100],
    "&:hover": {
      backgroundColor: grey[300],
    },
  },
};

export default MuiButton;
