import { component$, QRL, $ } from "@builder.io/qwik";
import { Toggle } from "~/components/toggle/toggle";
import { Button } from "~/components/button/button";
import type { Extension } from "~/routes";

interface CardProps {
  extension: Extension;
  onRemove$: QRL<(id: number) => void>;
  onToggle$: QRL<(id: number) => void>;
}

export const Card = component$<CardProps>(
  ({ extension, onRemove$, onToggle$ }) => {
    const { logo, name: title, description, isActive, id } = extension;

    const removeExtension = $(() => onRemove$(id));
    const toggleExtension = $(() => onToggle$(id));

    return (
      <div class="bg-custom-neutral-0 dark:bg-custom-neutral-800 border-custom-neutral-200 dark:border-custom-neutral-600 h-50 rounded-3xl border p-4 shadow-lg">
        <div class="flex h-full flex-col justify-between">
          <div class="flex gap-4">
            <div class="flex-shrink-0">
              <img src={logo} alt={title} width={60} height={60} class="h-15 w-15"/>
            </div>
            <div class="flex flex-col gap-1">
              <div class="text-xl font-bold">{title}</div>
              <div class="leading-5 font-thin">{description}</div>
            </div>
          </div>
          <div class="flex justify-between">
            <Button onClick$={removeExtension}>Remove</Button>
            <Toggle onToggle$={toggleExtension} active={isActive} />
          </div>
        </div>
      </div>
    );
  },
);
