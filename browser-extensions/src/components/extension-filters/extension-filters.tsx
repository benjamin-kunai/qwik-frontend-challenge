import { component$, Slot } from "@builder.io/qwik";

export interface ExtensionFiltersProps {}

export const ExtensionFilters = component$<ExtensionFiltersProps>(({}) => {
  return (
    <div class="flex flex-col md:flex-row md:justify-between items-center gap-5">
      <div>
        <div class="text-3xl font-bold">Extensions List</div>
      </div>
      <div class="flex gap-3">
        <Slot />
      </div>
    </div>
  );
});
