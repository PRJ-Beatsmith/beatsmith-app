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
      default: "#0B0D0E",
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
    fontFamily: ["Open Sans", "Noto Sans", "Inter", "sans-serif"].join(","),
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
    MuiTypography: {
      variants: [
        {
          props: { variant: "h1" },
          style: {
            fontSize: 40,
          },
        },
        {
          props: { variant: "h2" },
          style: {
            fontSize: 32,
          },
        },
        {
          props: { variant: "h3" },
          style: {
            fontSize: 24,
          },
        },
        {
          props: { variant: "h4" },
          style: {
            fontSize: 20,
          },
        },
        {
          props: { variant: "h5" },
          style: {
            fontSize: 16,
          },
        },
        {
          props: { variant: "h6" },
          style: {
            fontSize: 14,
          },
        },
        {
          props: { variant: "body1" },
          style: {
            fontFamily: "Noto Sans",
          },
        },
        {
          props: { variant: "body2" },
          style: {
            fontFamily: "Inter",
          },
        },
      ],
    },
  },
});

export default responsiveFontSizes(theme);
