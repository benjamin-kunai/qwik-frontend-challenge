import { createContextId, QRL } from "@builder.io/qwik";

export const THEME_LOCAL_STORAGE_KEY = "theme";

export const THEME_OPTIONS = {
  DARK: "dark",
  LIGHT: "light",
};
export type Theme = keyof typeof THEME_OPTIONS;

export type ThemeContextType = {
  theme: Theme;
  setTheme: QRL<(theme: Theme) => void>;
  toggleTheme: QRL<() => void>;
};

export const ThemeContext = createContextId<ThemeContextType>("app.theme");
