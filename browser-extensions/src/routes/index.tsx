import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";
import { ExtensionList } from "~/components/extension-list/extension-list";

const BASE_URL = "http://localhost:5173/";

export interface Extension {
  id: number;
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
}

export const useExtensions = routeLoader$<Extension[]>(async () => {
  const data = await fetch(`${BASE_URL}/data.json`);
  return data.json();
});

export default component$(() => {
  const extensionsData = useExtensions();
  return <ExtensionList initialExtensions={extensionsData.value} />;
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
