import { component$, useContext } from "@builder.io/qwik";
import { ThemeToggle } from "~/components/theme-toggle/theme-toggle";
import LightLogo from "/assets/images/logo.svg";
import DarkLogo from "/assets/images/logo-dark.svg";
import { ThemeContext, THEME_OPTIONS } from "~/context/theme-context";

export interface AppHeaderProps {
  classList?: string;
}

export const AppHeader = component$<AppHeaderProps>(({ classList }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      class={`bg-custom-neutral-0 dark:bg-custom-neutral-800 rounded-3xl p-4 shadow-lg ${classList}`}
    >
      <div class="flex justify-between">
        <div class="flex gap-2">
          <img 
            src={theme === THEME_OPTIONS.DARK ? DarkLogo : LightLogo} 
            alt="logo" 
            width={180}
            height={180}
          />
        </div>
        <ThemeToggle />
      </div>
    </div>
  );
});
