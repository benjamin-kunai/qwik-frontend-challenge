import { component$, Slot } from "@builder.io/qwik";
import { Toggle } from "../toggle/toggle";
import { Button } from "../button/button";

interface CardProps {
  title: string;
  description: string;
  logo?: string;
  isActive?: boolean;
}

export const Card = component$<CardProps>(
  ({ title, description, logo, isActive }) => {
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
            <Button>Remove</Button>
            <Toggle />
          </div>
        </div>
      </div>
    );
  },
);
