import { component$, Slot } from "@builder.io/qwik";

interface ButtonProps {
  // children: string;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  onClick?: (event: MouseEvent) => void;
}

export const Button = component$<ButtonProps>(({}) => {
  return (
    <button>
      <Slot />
    </button>
  );
});
