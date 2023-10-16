import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { setTheme } from "../actions/themeAction";
import { useSelector } from "react-redux";

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

export const tokens = (mode) => {
  return mode === "dark" ? darkMode : lightMode;
};

export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return createTheme({
    palette: {
      mode,
      primary: {
        main: colors.primary[500],
      },
      secondary: {
        main: colors.grey[100],
      },
      neutral: {
        dark: colors.grey[700],
        main: colors.grey[500],
        light: colors.grey[100],
      },
      background: {
        default: mode === "dark" ? colors.primary[500] : "#f6f6f6",
      },
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
};

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem("theme");
    return savedMode || "dark";
  });

  const dispatch = useDispatch();
  const stateMode = useSelector((state) => state.theme.mode);

  const toggleColorMode = () => {
    setMode((prev) => {
      const newMode = prev === "light" ? "dark" : "light";
      localStorage.setItem("theme", newMode);
      dispatch(setTheme(newMode));
      return newMode;
    });
  };

  const theme = useMemo(
    () => createTheme(themeSettings(stateMode || mode)),
    [stateMode, mode]
  );

  return [theme, toggleColorMode];
};
