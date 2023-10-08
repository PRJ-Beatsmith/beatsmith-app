import { createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { setTheme } from "@/actions/themeAction";

const darkMode = {
  magentaAccent: {
    100: "#fbd9dd",
    200: "#f6b3bc",
    300: "#f28c9a",
    400: "#ed6679",
    500: "#e94057",
    600: "#ba3346",
    700: "#8c2634",
    800: "#5d1a23",
    900: "#2f0d11",
  },
  grey: {
    100: "#fdfdfd",
    200: "#fbfbfb",
    300: "#fafafa",
    400: "#f8f8f8",
    500: "#f6f6f6",
    600: "#c5c5c5",
    700: "#949494",
    800: "#626262",
    900: "#313131",
  },
  primary: {
    100: "#d3d3d4",
    200: "#a6a7a8",
    300: "#7a7a7d",
    400: "#4d4e51",
    500: "#212226",
    600: "#1a1b1e",
    700: "#141417",
    800: "#0d0e0f",
    900: "#070708",
  },
};

const lightMode = {
  magentaAccent: {
    100: "#fbd9dd",
    200: "#f6b3bc",
    300: "#f28c9a",
    400: "#ed6679",
    500: "#e94057",
    600: "#ba3346",
    700: "#8c2634",
    800: "#5d1a23",
    900: "#2f0d11",
  },
  grey: {
    100: "#d3d3d4",
    200: "#a6a7a8",
    300: "#7a7a7d",
    400: "#4d4e51",
    500: "#212226",
    600: "#1a1b1e",
    700: "#141417",
    800: "#0d0e0f",
    900: "#070708",
  },
  primary: {
    100: "#fdfdfd",
    200: "#fbfbfb",
    300: "#fafafa",
    400: "#f8f8f8",
    500: "#f6f6f6",
    600: "#c5c5c5",
    700: "#949494",
    800: "#626262",
    900: "#313131",
  },
};

export const BeatSmithTheme = () => {
  const mode = useSelector(setTheme);

  const theme = createTheme({
    palette: {
      mode,
      ...(mode === "dark" ? darkMode : lightMode),
      // primary: {
      //   main: mode.primary[500],
      // },
      // background: {
      //   default: mode === "dark" ? colors.primary[500] : "#fcfcfc",
      // },
    },
    typography: {
      fontFamily: ["Azonix", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Azonix", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Azonix", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Azonix", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Azonix", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Azonix", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Azonix", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
  });

  return theme;
};
