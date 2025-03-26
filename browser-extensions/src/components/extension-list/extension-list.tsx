import { component$, useComputed$, useSignal, $ } from "@builder.io/qwik";
import { Button } from "~/components/button/button";
import { Card } from "~/components/card/card";
import { ExtensionFilters } from "~/components/extension-filters/extension-filters";
import type { Extension } from "~/routes";


export enum Filter {
  ALL = "all",
  ACTIVE = "active",
  INACTIVE = "inactive",
}

interface ExtensionListProps {
  initialExtensions: Extension[];
}

export const ExtensionList = component$<ExtensionListProps>(({ initialExtensions }) => {
  const filter = useSignal<Filter>(Filter.ALL);
  const allExtensions = useSignal<Extension[]>(initialExtensions);

  const viewedExtensions = useComputed$<Extension[]>(() => {
    if (filter.value === Filter.ALL) {
      return allExtensions.value;
    } else if (filter.value === Filter.ACTIVE) {
      return allExtensions.value.filter((extension) => extension.isActive);
    } else {
      return allExtensions.value.filter((extension) => !extension.isActive);
    }
  });

  const removeExtension = $((id: number) => {
    allExtensions.value = allExtensions.value.filter((e) => e.id !== id);
  });

  const toggleExtension = $((id: number) => {
    allExtensions.value = allExtensions.value.map((extension) =>
      extension.id === id
        ? { ...extension, isActive: !extension.isActive }
        : extension,
    );
  });

  return (
    <div>
      <div class="mb-10">
        <ExtensionFilters>
          <Button
            classList="px-5 py-2 text-lg"
            variant={filter.value === Filter.ALL ? "active" : "default"}
            onClick$={() => (filter.value = Filter.ALL)}
          >
            All
          </Button>
          <Button
            classList="px-5 py-2 text-lg"
            variant={filter.value === Filter.ACTIVE ? "active" : "default"}
            onClick$={() => (filter.value = Filter.ACTIVE)}
          >
            Active
          </Button>
          <Button
            classList="px-5 py-2 text-lg"
            variant={filter.value === Filter.INACTIVE ? "active" : "default"}
            onClick$={() => (filter.value = Filter.INACTIVE)}
          >
            Inactive
          </Button>
        </ExtensionFilters>
      </div>
      <div class="grid grid-cols-1 justify-center gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {viewedExtensions.value.map((extension) => (
          <Card
            key={extension.name}
            extension={extension}
            onRemove$={removeExtension}
            onToggle$={toggleExtension}
          />
        ))}
      </div>
    </div>
  );
}); 