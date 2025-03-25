import { component$, Slot } from "@builder.io/qwik";
import { toggleTheme } from "../theme-toggle/theme-helpers";
interface ButtonProps {
  // children: string;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  onClick?: (event: MouseEvent) => void;
}

export const Button = component$<ButtonProps>(({}) => {
  return (
    <button
      onClick$={() => toggleTheme()}
      class={`bg-neutral-0 rounded-full border border-neutral-700 px-4 py-2 text-neutral-900 dark:border-neutral-200 dark:bg-neutral-600 dark:text-neutral-100 cursor-pointer`}
    >
      <Slot />
    </button>
  );
});
