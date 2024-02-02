import { createTheme, responsiveFontSizes } from "@mui/material";
import { red, blue, green } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#f0f0ff",
    },
    secondary: {
      main: "#663399",
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
  },
  typography: {
    fontFamily: ["Roboto", "Helvetica Neue", "Arial", "sans-serif"].join(","),
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
