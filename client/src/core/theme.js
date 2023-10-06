import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { setTheme } from "../actions/themeAction";

const darkMode = {
  grey: {
    100: "#e0e0e0",
    200: "#c2c2c2",
    300: "#a3a3a3",
    400: "#858585",
    500: "#666666",
    600: "#525252",
    700: "#3d3d3d",
    800: "#292929",
    900: "#141414",
  },
  primary: {
    100: "#d0d1d5",
    200: "#a1a4ab",
    300: "#727681",
    400: "#1F2A40",
    500: "#141b2d",
    600: "#101624",
    700: "#0c101b",
    800: "#080b12",
    900: "#040509",
  },
};

const lightMode = {
  grey: {
    100: "#141414",
    200: "#292929",
    300: "#3d3d3d",
    400: "#525252",
    500: "#666666",
    600: "#858585",
    700: "#a3a3a3",
    800: "#c2c2c2",
    900: "#e0e0e0",
  },
  primary: {
    100: "#040509",
    200: "#080b12",
    300: "#0c101b",
    400: "#f2f0f0",
    500: "#141b2d",
    600: "#1F2A40",
    700: "#727681",
    800: "#a1a4ab",
    900: "#d0d1d5",
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
        default: mode === "dark" ? colors.primary[500] : "#fcfcfc",
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
  // const stateMode = useSelector((state) => state.theme.mode);

  const toggleColorMode = () => {
    setMode((prev) => {
      const newMode = prev === "light" ? "dark" : "light";
      localStorage.setItem("theme", newMode);
      dispatch(setTheme(newMode));
      return newMode;
    });
  };

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, toggleColorMode];
};
