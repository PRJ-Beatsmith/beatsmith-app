import { Box, IconButton } from "@mui/material";
import { tokens, useMode } from "@/core/theme";
import { LightModeOutlined, DarkModeOutlined } from "@mui/icons-material";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

export default function ThemeSwitchButton() {
  const [theme, toggleColorMode] = useMode();
  const colors = tokens(theme.palette.mode);
  const { t } = useTranslation();

  const handleThemeChange = () => {
    try {
      toggleColorMode();

      window.location.reload();

      toast.success(t("toast.SwitchTheme.success"), {
        position: toast.POSITION.BOTTOM_RIGHT,
        style: {
          backgroundColor: colors.primary[400],
          color: colors.grey[100],
        },
      });
    } catch (error) {
      toast.error(t("toast.SwitchTheme.error"), {
        position: toast.POSITION.BOTTOM_RIGHT,
        style: {
          backgroundColor: colors.primary[400],
          color: colors.grey[100],
        },
      });
    }
  };

  return (
    <Box>
      <IconButton onClick={() => handleThemeChange()}>
        {theme.palette.mode === "dark" ? (
          <LightModeOutlined />
        ) : (
          <DarkModeOutlined />
        )}
      </IconButton>
    </Box>
  );
}

// export default ThemeSwitchButton;
