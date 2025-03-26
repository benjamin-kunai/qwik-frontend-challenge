import { component$, Slot, type QRL } from "@builder.io/qwik";

interface ButtonProps {
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  onClick$: QRL<() => void>;
  classListOverride?: string;
}

export const Button = component$<ButtonProps>(
  ({ onClick$, classListOverride }) => {
    return (
      <button
        onClick$={onClick$}
        class={`bg-custom-neutral-0 border-custom-neutral-900 hover:bg-custom-red-700 hover:border-custom-red-700 hover:text-custom-neutral-0 focus:bg-custom-neutral-100 focus:border-custom-red-700 dark:border-custom-neutral-200 dark:bg-custom-neutral-800 dark:hover:bg-custom-red-400 dark:hover:text-custom-neutral-900 dark:hover:border-custom-red-400 dark:focus:bg-custom-neutral-700 dark:focus:border-custom-red-400 cursor-pointer rounded-full border px-4 py-2 dark:text-custom-neutral-200 text-custom-neutral-900 outline-none ${classListOverride}`}
      >
        <Slot />
      </button>
    );
  },
);
