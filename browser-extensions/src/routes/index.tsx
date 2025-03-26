import { component$, useComputed$, useSignal, $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";
import { Button } from "~/components/button/button";
import { Card } from "~/components/card/card";
import { ExtensionFilters } from "~/components/extension-filters/extension-filters";
import { SiteHeader } from "~/components/header/site-header";
const BASE_URL = "http://localhost:5173/";

export interface Extension {
  id: number;
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
}

/**
 * Loads the extensions data from the public/data.json file
 * @returns {Promise<Extension[]>} The extensions data
 */
export const useExtensions = routeLoader$<Extension[]>(async() => {
  const data = await fetch(`${BASE_URL}/data.json`);
  return data.json();
});

/**
 * Renders the extensions data in a card format
 * @returns {JSX.Element} The rendered card
 */
export default component$(() => {
  const extensionsData = useExtensions();
  const allExtensions = useSignal<Extension[]>(extensionsData.value);

  const viewedExtensions = useComputed$<Extension[]>(() => {
    return allExtensions.value;
  });

  const activeExtensions = useComputed$<Extension[]>(() => {
    return allExtensions.value.filter((extension) => extension.isActive);
  });

  const inactiveExtensions = useComputed$<Extension[]>(() => {
    return allExtensions.value.filter((extension) => !extension.isActive);
  });
  console.log({activeExtensions, inactiveExtensions});

  const removeExtension = $((id: number) => {
    console.log("removeExtension", id);
    allExtensions.value = allExtensions.value.filter((e) => e.id !== id);
  });

  const toggleExtension = $((id: number) => {
    allExtensions.value = allExtensions.value.map((extension) =>
      extension.id === id ? { ...extension, isActive: !extension.isActive } : extension,
    );
  });

  return (
    <div>
      <div class="mb-10">
      <ExtensionFilters>
        <Button classList="px-5 py-2 text-lg" variant="active" onClick$={() => viewedExtensions.value = allExtensions.value}>All</Button>
        <Button classList="px-5 py-2 text-lg" onClick$={() => viewedExtensions.value = activeExtensions.value}>Active</Button>
        <Button classList="px-5 py-2 text-lg" onClick$={() => viewedExtensions.value = inactiveExtensions.value}>Inactive</Button>
      </ExtensionFilters>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-center">
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

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
