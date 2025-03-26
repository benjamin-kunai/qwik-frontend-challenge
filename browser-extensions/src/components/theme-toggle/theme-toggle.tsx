import { component$, useContext } from "@builder.io/qwik";
import MoonIcon from "/assets/images/icon-moon.svg";
import SunIcon from "/assets/images/icon-sun.svg";
import { ThemeContext, THEME_OPTIONS } from "~/context/theme-context";

export interface ThemeToggleProps {}

export const ThemeToggle = component$<ThemeToggleProps>(() => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      class="dark:hover:bg-custom-neutral-600 hover:bg-custom-neutral-200 dark:bg-custom-neutral-700 bg-custom-neutral-100 flex cursor-pointer gap-2 rounded-xl p-3"
      onClick$={() => toggleTheme()}
    >
      <img 
        src={theme === THEME_OPTIONS.DARK ? SunIcon : MoonIcon} 
        alt="theme toggle icon" 
        width={24}
        height={24}
      />
    </div>
  );
});
