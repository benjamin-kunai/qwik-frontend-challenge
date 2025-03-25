import { component$, Slot, type QRL } from "@builder.io/qwik";

interface ButtonProps {
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  onClick$: QRL<() => void>;
}

export const Button = component$<ButtonProps>(({ onClick$ }) => {
  return (
    <button
      onClick$={onClick$}
      class={`bg-neutral-0 cursor-pointer rounded-full border border-neutral-700 px-4 py-2 text-neutral-900 dark:border-neutral-200 dark:bg-neutral-600 dark:text-neutral-100`}
    >
      <Slot />
    </button>
  );
});
