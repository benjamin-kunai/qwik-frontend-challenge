import { component$ } from "@builder.io/qwik";
import { toggleTheme } from "../theme-toggle/theme-helpers";


export interface SiteHeaderProps {
}

export const SiteHeader = component$<SiteHeaderProps>(({}) => {
  return (
    <header>
        <div class="rounded-lg bg-white p-4 shadow-lg dark:bg-neutral-600">
            <div class="flex justify-between">
                <div class="flex gap-2">
                    <img src="/assets/images/logo.svg" alt="logo" />
                </div>
            <div class="flex gap-2 cursor-pointer" onClick$={() => toggleTheme()}>
                <img src="/assets/images/icon-sun.svg" alt="logo" />
            </div>
            </div>
          
        </div>
    </header>
  );
});
