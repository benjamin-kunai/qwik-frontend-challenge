import { component$, QRL, $ } from "@builder.io/qwik";
import { Toggle } from "../toggle/toggle";
import { Button } from "../button/button";
import { Extension } from "~/routes";

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
      <div class="h-50 w-100 rounded-lg bg-white p-4 shadow-lg dark:bg-neutral-600">
        <div class="flex flex-col justify-between h-full">
          <div class="flex ">
            <div class="w-25 h-25">
              <img src={logo} alt={title} />
            </div>
            <div>
              <h2 class="font-bold">{title}</h2>
              <div class="">{description}</div>
            </div>
          </div>
          <div class="mt-4 flex justify-between">
            <Button onClick$={removeExtension}>Remove</Button>
            <Toggle onToggle$={toggleExtension} active={isActive} />
          </div>
        </div>
      </div>
    );
  },
);
