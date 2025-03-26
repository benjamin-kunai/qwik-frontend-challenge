import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import { SiteHeader } from "~/components/header/site-header";
export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.dev/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export default component$(() => {
  return (
    <header>
      <div class="flex flex-col items-center">
        <div class="w-full max-w-7xl px-4 mb-10">
          <SiteHeader classList="mt-10 mb-15" />
          <Slot />
        </div>
      </div>
    </header>
  );
});
