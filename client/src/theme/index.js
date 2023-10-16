import { createTheme, responsiveFontSizes } from "@mui/material";
import { red, blue, green } from "@mui/material/colors";

//fonts:
import AzonixTTF from "./fonts/Azonix/Azonix.ttf";
import SatoshiVariable from "./fonts/Satoshi/Satoshi-Variable.woff2";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      default: "#f6f6f6",
      main: "#f6f6f6",
    },
    secondary: {
      default: "#212226",
      main: "#212226",
    },
    accent: {
      default: "#e94057",
      main: "#e94057",
    },
    background: {
      default: "#212226",
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
    fontFamily: ["Satoshi", "sans-serif"].join(","),
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
    MuiCssBaseline: {
      styleOverrides: `
      @font-face {
        font-family: 'Satoshi';
        font-style: normal,
        font-display: swap;
        font-weight: 400;
        src: local("Satoshi"), url(${SatoshiVariable}) format("woff2");
      }
      @font-face {
        font-family: 'Azonix';
        font-style: normal;
        font-display: swap;
        font-weight: 400;
        src: local("Azonix"), url(${AzonixTTF}) format("truetype");
      }
      `,
    },
  },
});

export default responsiveFontSizes(theme);
