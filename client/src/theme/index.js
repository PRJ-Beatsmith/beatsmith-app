import { createTheme, responsiveFontSizes } from "@mui/material";
import { red, blue, green } from "@mui/material/colors";
import { grey } from "@mui/material/colors";

const primaryColor = localStorage.getItem("primary_color");
const secondaryColor = localStorage.getItem("secondary_color");

const white = "#ffffff";
// const black = "#000000";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      contrastText: white,
      main: primaryColor || "#f0f0ff",
    },
    secondary: {
      contrastText: white,
      main: secondaryColor || "#663399",
    },
    background: {
      default: "#070911",
    },
    success: {
      main: green[500],
    },
    info: {
      main: blue[500],
    },
    error: {
      main: red[500],
    },
    text: {
      primary: white,
      secondary: "#b0b0b0",
    },
    icon: white,
    divider: grey[600],
  },
  typography: {
    fontFamily: ["Roboto", "Satoshi", "Montserrat", "sans-serif"].join(","),
    fontSize: 12,
    h1: {
      fontSize: 40,
    },
    h2: {
      fontSize: 32,
    },
    h3: {
      fontSize: 24,
    },
    h4: {
      fontSize: 20,
    },
    h5: {
      fontSize: 16,
    },
    h6: {
      fontSize: 14,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      mobile: 600,
      tablet: 960,
      laptop: 1280,
      desktop: 1920,
    },
  },
  components: {
    breakpoints: {
      BreakpointsOverride: {
        values: {
          xs: true,
          sm: false,
          md: false,
          lg: false,
          xl: false,
          mobile: true,
          tablet: true,
          laptop: true,
          desktop: true,
        },
      },
    },
  },
});

export default responsiveFontSizes(theme);
