import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";
import { Card } from "~/components/card/card";

const BASE_URL = "http://localhost:5173/";

export interface Extension {
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
  const extensions = useExtensions();
  console.log(extensions.value);

  return (
    <div class="flex">
      {extensions.value.map((extension) => (
        <Card
          title={extension.name}
          description={extension.description}
          logo={extension.logo}
          isActive={extension.isActive}
        />
      ))}
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
