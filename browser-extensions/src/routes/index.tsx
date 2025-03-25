import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Button } from "../components/button/button";
export default component$(() => {
  return (
    <>
      <h1>Hi 👋</h1>
      <Button>Click me</Button>
      <div>
        Can't wait to see what you build with qwik!
        <br />
        Happy coding.
      </div>
    </>
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
