import { component$, QRL, Slot, useSignal } from "@builder.io/qwik";
interface ToggleProps {
    active?: boolean;
    onToggle$: QRL<() => void>;
}

export const Toggle = component$<ToggleProps>(({active, onToggle$}) => {

  return (
    <label class="group relative flex items-center justify-between p-2 text-xl">
      <input
        onClick$={onToggle$}
        checked={active}
        type="checkbox"
        class="peer absolute left-1/2 h-full w-full -translate-x-1/2 appearance-none rounded-md cursor-pointer"
      />
      <span class="cursor-pointer ml-4 flex h-5 w-10 flex-shrink-0 items-center rounded-full bg-custom-neutral-300 p-1 duration-300 ease-in-out peer-checked:bg-custom-red-700 dark:bg-custom-neutral-600 dark:peer-checked:bg-custom-red-400 after:h-5 after:w-5 after:rounded-full after:bg-custom-neutral-0 after:shadow-md after:duration-300 peer-checked:after:translate-x-3"></span>
    </label>
  );
});
