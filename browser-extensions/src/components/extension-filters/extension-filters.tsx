import { component$, Slot } from "@builder.io/qwik";

export interface ExtensionFiltersProps {}

export const ExtensionFilters = component$<ExtensionFiltersProps>(({}) => {
  return (
    <div class="flex justify-between">
      <div>
        <h2>Extensions List</h2>
      </div>
      <div>
        <Slot />
      </div>
    </div>
  );
});
