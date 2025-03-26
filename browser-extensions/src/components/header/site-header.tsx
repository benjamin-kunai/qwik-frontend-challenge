import { component$ } from "@builder.io/qwik";
import { toggleTheme } from "../theme-toggle/theme-helpers";

export interface SiteHeaderProps {
  classList?: string;
}

export const SiteHeader = component$<SiteHeaderProps>(({ classList }) => {
  return (
    <div
      class={`bg-custom-neutral-0 dark:bg-custom-neutral-800 rounded-3xl p-4 shadow-lg ${classList}`}
    >
      <div class="flex justify-between">
        <div class="flex gap-2">
          <img src="/assets/images/logo.svg" alt="logo" />
        </div>
        <div class="flex cursor-pointer gap-2" onClick$={() => toggleTheme()}>
          <img src="/assets/images/icon-sun.svg" alt="logo" />
        </div>
      </div>
    </div>
  );
});
